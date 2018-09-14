import {
    combineReducers,
    createStore,
    Reducer,
    Store
} from 'redux';

// Reducers.
import addressReducer from './address/reducer';
import settingsReducer from './settings/reducer';

// Types.
import { AddressState } from './address/types';
import { SettingsState } from './settings/types';

export interface ApplicationState {
    addressState: AddressState;
    settingsState: SettingsState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    addressState: addressReducer,
    settingsState: settingsReducer,
});

export function configureStore(): Store<ApplicationState> {
    return createStore(
        reducers,
    );
}
