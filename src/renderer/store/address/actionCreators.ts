import { ActionCreator } from 'redux';

// Types.
import {
    AddressActionTypes,
    SetUrlAction,
    StartLoadingUrlAction,
    StopLoadingUrlAction,
} from './types';

export const setUrl: ActionCreator<SetUrlAction> = (url: string) => ({
    type: AddressActionTypes.SetUrl,
    url,
});

export const startLoadingUrl: ActionCreator<StartLoadingUrlAction> = () => ({
    type: AddressActionTypes.StartLoadingUrl,
});

export const stopLoadingUrl: ActionCreator<StopLoadingUrlAction> = () => ({
    type: AddressActionTypes.StopLoadingUrl,
});
