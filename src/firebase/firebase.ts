import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';
import { firebaseConfig } from './config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics with a fallback for environments where it's not supported
let analytics = null;
let remoteConfig = null;

// Function to initialize Firebase services
export const initFirebase = async () => {
  // Only initialize Firebase services in the browser, not during SSR
  if (typeof window !== 'undefined') {
    try {
      // Check if analytics is supported in this environment
      if (await isSupported()) {
        analytics = getAnalytics(app);
        console.log('Firebase Analytics initialized');
      }
      
      // Initialize Remote Config for A/B testing
      remoteConfig = getRemoteConfig(app);
      
      // Set default values for remote config (for A/B testing)
      remoteConfig.defaultConfig = {
        'welcome_message': 'Less time doing bullshit, more time making magic',
        'button_color': '#4285F4',
        'feature_flag_new_ui': false,
      };
      
      // Set minimum fetch interval for development
      remoteConfig.settings.minimumFetchIntervalMillis = process.env.NODE_ENV === 'development' ? 0 : 3600000;
      
      // Fetch and activate remote config
      await fetchAndActivate(remoteConfig);
      console.log('Firebase Remote Config initialized');
    } catch (error) {
      console.error('Error initializing Firebase:', error);
    }
  }
};

// Analytics event logging
export const logAnalyticsEvent = (eventName: string, eventParams = {}) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  } else {
    console.log('Analytics not available, event not logged:', eventName, eventParams);
  }
};

// Get remote config value (for A/B testing)
export const getRemoteConfigValue = (key: string) => {
  if (!remoteConfig) return null;
  
  try {
    const value = getValue(remoteConfig, key);
    return value.asString();
  } catch (error) {
    console.error(`Error getting remote config value for ${key}:`, error);
    return null;
  }
};

// Get remote config boolean value
export const getRemoteConfigBoolean = (key: string) => {
  if (!remoteConfig) return false;
  
  try {
    const value = getValue(remoteConfig, key);
    return value.asBoolean();
  } catch (error) {
    console.error(`Error getting remote config boolean for ${key}:`, error);
    return false;
  }
};

export { app }; 