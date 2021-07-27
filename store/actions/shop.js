import { BASE_URL, IDENTITY } from "../../constants/network";
import Product from "../../models/product";


export const ADD_PRODUCT_TO_SHOP = 'ADD_PRODUCT_TO_SHOP';
export const EDIT_PRODUCT_FROM_SHOP = 'EDIT_PRODUCT_FROM_SHOP';
export const DELETE_PRODUCT_FROM_SHOP = 'DELETE_PRODUCT_FROM_SHOP';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';

export const PLACE_ORDER = 'PLACE_ORDER';

export const fetchProducts = () => {

  return async dispatch => {
    try {
      const res = await fetch(`${BASE_URL}/products.json`);

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await res.json();
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            IDENTITY,
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price
          )
        );
      }

      dispatch({ type: SET_PRODUCTS, products: loadedProducts })
    }
    catch (err) {
      throw err;
    }
  };
};

export const addProductToShop = ({ title, imageUrl, description, price }) => {
  return async dispatch => {
    const res = await fetch(`${BASE_URL}/products.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        imageUrl,
        description,
        price
      })
    });

    const resData = await res.json();

    dispatch({
      type: ADD_PRODUCT_TO_SHOP,
      product: {
        id: resData.name,
        title,
        imageUrl,
        description,
        price
      }
    });
  }
};

export const editProductFromShop = ({ id, title, imageUrl, description }) => {
  return async dispatch => {
    await fetch(`${BASE_URL}/products/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        imageUrl,
        description
      })
    });

    dispatch({
      type: EDIT_PRODUCT_FROM_SHOP,
      product: { id, title, imageUrl, description }
    });
  }
};

export const deleteProductFromShop = (id) => {
  return async dispatch => {
    await fetch(`${BASE_URL}/products/${id}.json`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_PRODUCT_FROM_SHOP,
      productId: id
    });
  }
};



export const addProductToCart = (id) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    productId: id
  };
};

export const deleteProductFromCart = (id) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    productId: id
  };
};



export const placeOrder = () => {
  return {
    type: PLACE_ORDER,
  }
};