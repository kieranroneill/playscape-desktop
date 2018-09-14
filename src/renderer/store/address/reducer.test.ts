// Reducer.
import reducer from './reducer';

// Types.
import {
    AddressActionTypes,
    AddressState,
    SetUrlAction,
} from './types';

// Utils.
import { getInitialState } from './utils';

interface Scope {
    initialState: AddressState;
}

describe('src/store/layout/reducer', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            initialState: getInitialState(),
        };
    });

    describe('AddressActionTypes.SetUrl', () => {
        it('should set the url', () => {
            const url: string = 'http://element43.xyz';
            const action: SetUrlAction = {
                type: AddressActionTypes.SetUrl,
                url,
            };

            expect(reducer(scope.initialState, action).url).toBe(url);
        });
    });
});

