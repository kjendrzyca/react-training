import Dispatcher from '../dispatcher';
import CartActionTypes from './cartActionTypes';

export default {
    add: (product) => {
        Dispatcher.dispatch({
            type: CartActionTypes.ADD,
            product: product
        });
    },

    clear: () => {
        Dispatcher.dispatch({
            type: CartActionTypes.CLEAR
        });
    },

    remove: (productId) => {
        Dispatcher.dispatch({
            type: CartActionTypes.REMOVE,
            productId: productId
        });
    }
};