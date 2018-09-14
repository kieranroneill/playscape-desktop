import { ActionCreator } from 'redux';

// Types.
import {
    CloseDrawerAction,
    OpenDrawerAction,
    SettingsActionTypes,
} from './types';

export const closeSettingsDrawer: ActionCreator<CloseDrawerAction> = () => ({
    type: SettingsActionTypes.CloseDrawer,
});

export const openSettingsDrawer: ActionCreator<OpenDrawerAction> = () => ({
    type: SettingsActionTypes.OpenDrawer,
});
