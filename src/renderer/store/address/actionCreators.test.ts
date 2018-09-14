// Types.
import { AddressActionTypes } from './types';

// Action creators.
import {
    setUrl,
} from './actionCreators';

describe('store/address/actionCreators', () => {
    describe('setUrl()', () => {
        it('should create an action to set the url', () => {
            const url: string = 'testytesty';

            expect(setUrl(url)).toEqual({
                type: AddressActionTypes.SetUrl,
                url,
            });
        });
    });
});
