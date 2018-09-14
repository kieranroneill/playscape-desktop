import { Action } from 'redux';

//====================================================
// States.
//====================================================

export interface AddressState {
    homeUrl: string,
    loading: boolean;
    url: string;
}

//====================================================
// Action types.
//====================================================

export enum AddressActionTypes {
    SetUrl = '@address/SET_URL',
    StartLoadingUrl = '@address/START_LOADING_URL',
    StopLoadingUrl = '@address/STOP_LOADING_URL',
}

//====================================================
// Actions.
//====================================================

export interface SetUrlAction extends Action {
    type: AddressActionTypes.SetUrl;
    url: string;
}

export interface StartLoadingUrlAction extends Action {
    type: AddressActionTypes.StartLoadingUrl;
}

export interface StopLoadingUrlAction extends Action {
    type: AddressActionTypes.StopLoadingUrl;
}

export type AddressActions = SetUrlAction
    | StartLoadingUrlAction
    | StopLoadingUrlAction;
