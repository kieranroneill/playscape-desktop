import { Action } from 'redux';

//====================================================
// States.
//====================================================

export interface SettingsState {
    drawerOpen: boolean;
}

//====================================================
// Action types.
//====================================================

export enum SettingsActionTypes {
    CloseDrawer = '@settings/CLOSE_DRAWER',
    OpenDrawer = '@settings/OPEN_DRAWER',
}

//====================================================
// Actions.
//====================================================

export interface CloseDrawerAction extends Action {
    type: SettingsActionTypes.CloseDrawer;
}

export interface OpenDrawerAction extends Action {
    type: SettingsActionTypes.OpenDrawer;
}

export type SettingsActions = CloseDrawerAction
    | OpenDrawerAction;
