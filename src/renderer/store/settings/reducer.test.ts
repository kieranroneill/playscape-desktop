// Reducer.
import reducer from './reducer';

// Types.
import {
    CloseDrawerAction,
    OpenDrawerAction,
    SettingsActionTypes,
    SettingsState,
} from './types';

// Utils.
import { getInitialState } from './utils';

interface Scope {
    initialState: SettingsState;
}

describe('src/store/settings/reducer', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            initialState: getInitialState(),
        };
    });

    describe('SettingsActionTypes.CloseDrawer', () => {
        it('should set the drawer open to false', () => {
            const action: CloseDrawerAction = {
                type: SettingsActionTypes.CloseDrawer,
            };

            scope.initialState.drawerOpen = true;

            expect(reducer(scope.initialState, action).drawerOpen).toBe(false);
        });
    });

    describe('SettingsActionTypes.OpenDrawer', () => {
        it('should set the drawer open to true', () => {
            const action: OpenDrawerAction = {
                type: SettingsActionTypes.OpenDrawer,
            };

            scope.initialState.drawerOpen = false;

            expect(reducer(scope.initialState, action).drawerOpen).toBe(true);
        });
    });
});

