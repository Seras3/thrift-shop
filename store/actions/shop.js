export const ADD_PRODUCT_TO_SHOP = 'ADD_PRODUCT_TO_SHOP';
export const EDIT_PRODUCT_FROM_SHOP = 'ADD_PRODUCT_FROM_SHOP';
export const DELETE_PRODUCT_FROM_SHOP = 'ADD_PRODUCT_FROM_SHOP';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'ADD_PRODUCT_FROM_CART';

export const PLACE_ORDER = 'PLACE_ORDER';


export const addProductToShop = ({ title, imageUrl, description, price }) => {
  return {
    type: ADD_PRODUCT_TO_SHOP,
    product: { title, imageUrl, description, price }
  };
};

export const editProductFromShop = ({ id, owner, title, imageUrl, description, price }) => {
  return {
    type: EDIT_PRODUCT_FROM_SHOP,
    product: { id, owner, title, imageUrl, description, price }
  };
};

export const deleteProductFromShop = (id) => {
  return {
    type: EDIT_PRODUCT_FROM_SHOP,
    productId: id
  };
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



export const placeOrder = (newOrder) => {
  return {
    type: PLACE_ORDER,
    order: newOrder
  }
};