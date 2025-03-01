import { useEffect, useState } from 'react';
import { initFirebase, logAnalyticsEvent, getRemoteConfigValue, getRemoteConfigBoolean } from './firebase';

export const useFirebase = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await initFirebase();
      setIsInitialized(true);
    };

    initialize();
  }, []);

  return {
    isInitialized,
    logEvent: logAnalyticsEvent,
    getConfigValue: getRemoteConfigValue,
    getConfigBoolean: getRemoteConfigBoolean,
  };
};

export default useFirebase; 