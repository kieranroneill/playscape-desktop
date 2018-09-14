import { Reducer } from 'redux';

// Types.
import {
    SettingsActions,
    SettingsActionTypes,
    SettingsState,
} from './types';

// Utils.
import { getInitialState } from './utils';

const reducer: Reducer<SettingsState, SettingsActions> = (state: SettingsState = getInitialState(), action: SettingsActions) => {
    switch (action.type) {
        case SettingsActionTypes.CloseDrawer:
            return {
                ...state,
                drawerOpen: false,
            };
        case SettingsActionTypes.OpenDrawer:
            return {
                ...state,
                drawerOpen: true,
            };
        default:
            return state;
    }
};

export default reducer;
