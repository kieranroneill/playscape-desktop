// Types.
import { SettingsActionTypes } from './types';

// Action creators.
import {
    closeSettingsDrawer,
    openSettingsDrawer,
} from './actionCreators';

describe('store/settings/actionCreators', () => {
    describe('closeSettingsDrawer()', () => {
        it('should create an action close the settings drawer', () => {
            expect(closeSettingsDrawer()).toEqual({
                type: SettingsActionTypes.CloseDrawer,
            });
        });
    });

    describe('openSettingsDrawer()', () => {
        it('should create an action open the settings drawer', () => {
            expect(openSettingsDrawer()).toEqual({
                type: SettingsActionTypes.OpenDrawer,
            });
        });
    });
});
