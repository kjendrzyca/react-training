'use strict';

import {EventEmitter} from 'events';
import Assign from 'object-assign';
import Immutable from 'immutable';

import Dispatcher from './dispatcher';
import CartStoreActionTypes from './cartStoreActionTypes';


const CHANGE_EVENT = 'change';
const _cart = Immutable.List();
const Product = Immutable.Record({
    id: 0,
    name: '',
    shortDescription: '',
    description: '',
    price: 0
});

const CartStore = Assign({}, EventEmitter.prototype, {

    getAll () {
        return _cart;
    },

    emitChange () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

Dispatcher.register((action) => {
    switch (action.type) {
        case CartStoreActionTypes.ADD:
            _cart = _cart.push(new Product(action.product));

            CartStore.emitChange();
            break;
    }
});

export default CartStore;
