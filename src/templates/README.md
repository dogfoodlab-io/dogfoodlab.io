# StashDog String Templates

This directory contains string templates for the StashDog product page. The templates are designed to enable easy A/B testing of different copy styles.

## Files

- `stashdogStrings.ts`: Contains the edgy, humorous copy version
- `stashdogStringsAlt.ts`: Contains the professional, more conservative copy version
- `config.ts`: Configuration file that controls which string template is used

## How to Use

The `config.ts` file exports a variable called `activeStashdogStrings` which is determined by the `useAltStrings` flag. This flag can be controlled via Firebase Remote Config for A/B testing.

```typescript
// In config.ts
export const useAltStrings = false; // Set to true to use the alternative strings

// Export the active strings based on the configuration
export const activeStashdogStrings = useAltStrings ? stashdogStringsAlt : stashdogStrings;
```

In your components, import the active strings:

```typescript
import { activeStashdogStrings } from '../templates/config';

// Then use them in your component
<h2>{activeStashdogStrings.welcome.title}</h2>
<p>{activeStashdogStrings.welcome.description}</p>
```

## A/B Testing with Firebase Remote Config

To implement A/B testing:

1. Create a remote config parameter in Firebase called `use_alt_stashdog_strings`
2. Update the `config.ts` file to fetch this value from Firebase Remote Config
3. Set up A/B testing in Firebase to distribute different values to different user segments

Example implementation with Firebase Remote Config:

```typescript
// In config.ts
import { getConfigBoolean } from '../firebase';

// Get the value from Firebase Remote Config
export const useAltStrings = getConfigBoolean('use_alt_stashdog_strings') || false;

// Export the active strings based on the configuration
export const activeStashdogStrings = useAltStrings ? stashdogStringsAlt : stashdogStrings;
```

This setup allows for easy switching between different copy styles without changing the code structure. 