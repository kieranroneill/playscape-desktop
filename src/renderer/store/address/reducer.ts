import { Reducer } from 'redux';

// Types.
import {
    AddressActions,
    AddressActionTypes,
    AddressState,
} from './types';

// Utils.
import { getInitialState } from './utils';

const reducer: Reducer<AddressState, AddressActions> = (state: AddressState = getInitialState(), action: AddressActions) => {
    switch (action.type) {
        case AddressActionTypes.SetUrl:
            return {
                ...state,
                url: action.url,
            };
        case AddressActionTypes.StartLoadingUrl:
            return {
                ...state,
                loading: true,
            };
        case AddressActionTypes.StopLoadingUrl:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
