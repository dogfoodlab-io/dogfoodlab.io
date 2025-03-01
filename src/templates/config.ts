import { stashdogStrings } from './stashdogStrings';
import { stashdogStringsAlt } from './stashdogStringsAlt';

// This can be controlled via remote config for A/B testing
export const useAltStrings = false;

// Export the active strings based on the configuration
export const activeStashdogStrings = useAltStrings ? stashdogStringsAlt : stashdogStrings; 