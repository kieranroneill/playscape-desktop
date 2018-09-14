// Types.
import { SettingsState } from './types';

/**
 * Convenience function for getting the initial state.
 * @returns the initial state.
 */
export function getInitialState(): SettingsState {
    return {
        drawerOpen: false,
    };
}
