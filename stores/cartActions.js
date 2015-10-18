import Dispatcher from '../dispatcher';
import CartStoreActionTypes from './cartStoreActionTypes';

export default {
    add: (product) => {
        Dispatcher.dispatch({
            type: CartStoreActionTypes.ADD,
            product: product
        });
    }
};
