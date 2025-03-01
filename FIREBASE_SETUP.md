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
   - Tracks `page_title`, `page_location`, and `page_path`
   - Allows you to see which pages are most visited

2. **CTA Button Clicks**: Tracked when a user clicks on any CTA button
   - Event name: `cta_click`
   - Parameters:
     - `product_name` or `cta_type`: Identifies which product or CTA was clicked
     - `button_text`: The text displayed on the button
     - `button_position`: Where the button appears (e.g., 'hero', 'product_card', 'feature_section', 'footer_cta')
     - `page`: Which page the click occurred on

3. **Feature Clicks**: Tracked when a user interacts with specific features
   - Event name: `feature_click`
   - Parameters:
     - `feature_name`: The name of the feature clicked
     - `page`: Which page the click occurred on

4. **Contact Clicks**: Tracked when a user clicks on the contact email
   - Event name: `contact_click`
   - Parameters:
     - `page`: Which page the click occurred on

5. **Navigation Events**: Tracked when a user navigates between pages
   - Event name: `navigation`
   - Parameters:
     - `destination`: Where the user is going
     - `source`: Where the user is coming from

You can add more custom events by using the `logEvent` function:

```typescript
import { logAnalyticsEvent } from '../firebase';

// Log a custom event
logAnalyticsEvent('custom_event_name', {
  parameter1: 'value1',
  parameter2: 'value2'
});
```

### Creating Analytics Reports

To create reports that track user visits and CTA button clicks:

1. Go to the Firebase Console > Analytics > Dashboard
2. Click on "Events" in the left sidebar
3. You'll see all the events being tracked, including `page_view` and `cta_click`
4. To create a custom report:
   - Click on "Create new report" or "Custom reports" in the left sidebar
   - Select "New custom report"
   - Choose the metrics you want to track (e.g., Event count)
   - Filter by event name (e.g., `cta_click`)
   - Group by parameters (e.g., `product_name`, `button_position`, or `page`)
   - Set the time range and create the report

5. For tracking user visits:
   - Create a report based on `page_view` events
   - Group by `page_path` or `page_title`

6. For tracking CTA button clicks:
   - Create a report based on `cta_click` events
   - Group by `product_name`/`cta_type` and `button_position`
   - This will show you which CTAs are most popular and where they're being clicked

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
4. To see conversion funnels:
   - Go to Analytics > Funnels
   - Create a new funnel with steps like "page_view" → "cta_click" → "generate_lead"
   - This will show you how users progress through your site

## Troubleshooting

- **Analytics Not Working**: Make sure you have the correct Measurement ID and that Analytics is enabled in your Firebase project
- **Remote Config Not Working**: Check that you've set up the parameters correctly and that the app has successfully fetched the remote config
- **Events Not Showing Up**: There may be a delay before events appear in the Firebase Console
- **Missing Event Parameters**: Check the browser console for any errors in the event logging

## Resources

- [Firebase Analytics Documentation](https://firebase.google.com/docs/analytics)
- [Firebase Remote Config Documentation](https://firebase.google.com/docs/remote-config)
- [Firebase A/B Testing Documentation](https://firebase.google.com/docs/ab-testing)
- [Google Analytics 4 Events](https://support.google.com/analytics/answer/9322688) 