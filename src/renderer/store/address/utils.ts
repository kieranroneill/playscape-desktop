// Types.
import { AddressState } from './types';

const homeUrl: string = 'https://duckduckgo.com/';

/**
 * Convenience function for getting the initial state.
 * @returns the initial state.
 */
export function getInitialState(): AddressState {
    return {
        homeUrl,
        loading: false,
        url: homeUrl,
    };
}
