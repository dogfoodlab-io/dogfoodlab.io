# Firebase Analytics and A/B Testing Setup

This document provides instructions on how to set up Firebase Analytics and A/B testing for the Dogfood Lab Gatsby application.

## Prerequisites

1. A Firebase project (create one at [https://console.firebase.google.com/](https://console.firebase.google.com/))
2. Node.js and npm/yarn installed

## Setup Steps

### 1. Firebase Project Configuration

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Add a web app to your Firebase project
   - Click on the web icon (</>) on the project overview page
   - Register your app with a nickname (e.g., "Dogfood Lab Web")
   - Copy the Firebase configuration object for later use

### 2. Enable Google Analytics

1. In the Firebase Console, go to Analytics > Dashboard
2. Follow the prompts to enable Google Analytics for your project
3. Note your Measurement ID (starts with G-) for later use

### 3. Set Up Remote Config for A/B Testing

1. In the Firebase Console, go to Engage > Remote Config
2. Create the following parameters for A/B testing:
   - `welcome_message` (String): Default value "Welcome to DogFood Lab!"
   - `button_color` (String): Default value "#4285F4"
   - `feature_flag_new_ui` (Boolean): Default value false
3. Create A/B test experiments:
   - Go to A/B Testing in the Firebase Console
   - Create a new experiment
   - Select the parameter you want to test (e.g., `welcome_message`)
   - Define variants (e.g., "Welcome to DogFood Lab!" vs "Less Time Doing Bullshit, More Time Making Magic")
   - Set the experiment goal (e.g., "Click on product")
   - Set the experiment duration and audience targeting

### 4. Environment Variables

1. Create a `.env` file in the root of your project (based on the `.env.example` template)
2. Fill in the Firebase configuration values from step 1:

```
GATSBY_FIREBASE_API_KEY=your_api_key
GATSBY_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
GATSBY_FIREBASE_PROJECT_ID=your_project_id
GATSBY_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
GATSBY_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
GATSBY_FIREBASE_APP_ID=your_app_id
GATSBY_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. Update Firebase Configuration

1. Open `src/firebase/config.ts`
2. Replace the placeholder values with your actual Firebase configuration:

```typescript
export const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID
};
```

## Usage

### Analytics Events

The application is set up to track the following events:

1. **Page Views**: Automatically tracked when a user visits a page
2. **Product Clicks**: Tracked when a user clicks on a product
3. **Contact Clicks**: Tracked when a user clicks on the contact email

You can add more custom events by using the `logEvent` function:

```typescript
import { logAnalyticsEvent } from '../firebase';

// Log a custom event
logAnalyticsEvent('custom_event_name', {
  parameter1: 'value1',
  parameter2: 'value2'
});
```

### A/B Testing

The application is set up to use the following A/B test parameters:

1. **Welcome Message**: Controls the main heading on the home page
2. **Button Color**: Controls the color of CTA buttons
3. **Feature Flag for New UI**: Controls whether to show a "New Product" section

You can add more A/B test parameters by:

1. Adding them to the Remote Config in the Firebase Console
2. Adding them to the default config in `src/firebase/firebase.ts`
3. Using them in your components with the `getConfigValue` or `getConfigBoolean` functions

## Viewing Analytics Data

1. Go to the Firebase Console > Analytics
2. View real-time data, user demographics, events, and more
3. For A/B test results, go to A/B Testing in the Firebase Console

## Troubleshooting

- **Analytics Not Working**: Make sure you have the correct Measurement ID and that Analytics is enabled in your Firebase project
- **Remote Config Not Working**: Check that you've set up the parameters correctly and that the app has successfully fetched the remote config
- **Events Not Showing Up**: There may be a delay before events appear in the Firebase Console

## Resources

- [Firebase Analytics Documentation](https://firebase.google.com/docs/analytics)
- [Firebase Remote Config Documentation](https://firebase.google.com/docs/remote-config)
- [Firebase A/B Testing Documentation](https://firebase.google.com/docs/ab-testing) 