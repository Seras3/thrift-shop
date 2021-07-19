import uuid from 'react-native-uuid';
import { PRODUCTS } from '../../data/dummy-data';
import CartItem from '../../models/cart-item';

import {
  ADD_PRODUCT_TO_SHOP,
  EDIT_PRODUCT_FROM_SHOP,
  DELETE_PRODUCT_FROM_SHOP,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  PLACE_ORDER
} from '../actions/shop';

const initState = {
  products: PRODUCTS,
  cart: [],
  orders: [],
  identity: ('u' + uuid.v4())
};

const shopReducer = (state = initState, action) => {
  let product = {};
  let filteredProducts = [];
  let updatedProducts = [];
  let updatedCart = [];
  let index = -1;

  switch (action.type) {
    case ADD_PRODUCT_TO_SHOP:
      product = {
        id: uuid.v4(),
        owner: state.identity,
        ...action.product
      };
      updatedProducts = [...state.products, product];
      return { ...state, products: updatedProducts };

    case EDIT_PRODUCT_FROM_SHOP:
      filteredProducts = state.products.filter(product => product.id !== action.product.id);
      updatedProducts = [...filteredProducts, action.product];
      return { ...state, products: updatedProducts };

    case DELETE_PRODUCT_FROM_SHOP:
      updatedProducts = state.products.filter(product => product.id !== action.productId);
      return { ...state, product: updatedProducts };



    case ADD_PRODUCT_TO_CART:
      product = state.products.find(product => product.id === action.productId);
      updatedCart = [...state.cart];
      index = updatedCart.findIndex(cartItem => cartItem.product.id === action.productId);

      if (index >= 0) {
        updatedCart[index].cnt += 1;
      } else {
        updatedCart = [...updatedCart, new CartItem(product)];
      }

      return { ...state, cart: updatedCart };

    case DELETE_PRODUCT_FROM_CART:
      index = state.cart.findIndex(cartItem => cartItem.product.id === action.productId);
      updatedCart = [...state.cart];

      if (updatedCart[index].cnt > 1) {
        updatedCart[index].cnt -= 1;
      } else {
        updatedCart.splice(index, 1);
      }

      return { ...state, cart: updatedCart };



    case PLACE_ORDER:
      // TODO: define Order model
      // TODO: push new Order() 
      return state;


    default:
      return state;
  }
};

export default shopReducer;