import { PRODUCTS } from '../../data/dummy-data';
import CartItem from '../../models/cart-item';
import Order from '../../models/order';
import { IDENTITY } from '../../constants/network';

import {
  ADD_PRODUCT_TO_SHOP,
  EDIT_PRODUCT_FROM_SHOP,
  DELETE_PRODUCT_FROM_SHOP,
  SET_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  PLACE_ORDER
} from '../actions/shop';

const initState = {
  products: PRODUCTS,
  cart: [],
  orders: [],
  identity: (IDENTITY)
};

const shopReducer = (state = initState, action) => {
  let product = {};
  let filteredProducts = [];
  let updatedProducts = [];
  let updatedCart = [];
  let updatedOrders = [];
  let index = -1;

  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case ADD_PRODUCT_TO_SHOP:
      product = {
        ...action.product,
        owner: state.identity
      };
      updatedProducts = [product, ...state.products];
      return { ...state, products: updatedProducts };

    case EDIT_PRODUCT_FROM_SHOP:
      index = state.products.findIndex(product => product.id === action.product.id)
      const newProduct = { ...state.products[index], ...action.product }
      filteredProducts = [...state.products];
      filteredProducts.splice(index, 1);
      updatedProducts = [newProduct, ...filteredProducts];
      return { ...state, products: updatedProducts };

    case DELETE_PRODUCT_FROM_SHOP:
      updatedProducts = state.products.filter(product => product.id !== action.productId);
      return { ...state, products: updatedProducts };



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
      updatedOrders = [...state.orders, new Order(state.cart)];
      return { ...state, cart: [], orders: updatedOrders };


    default:
      return state;
  }
};

export default shopReducer;