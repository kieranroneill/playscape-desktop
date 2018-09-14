import {
    combineReducers,
    createStore,
    Reducer,
    Store
} from 'redux';

// Reducers.
import addressReducer from './address/reducer';

// Types.
import { AddressState } from './address/types';

export interface ApplicationState {
    addressState: AddressState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    addressState: addressReducer,
});

export function configureStore(): Store<ApplicationState> {
    return createStore(
        reducers,
    );
}
