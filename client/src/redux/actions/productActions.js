import { createActions } from "redux-actions";

export const createProduct = createActions({
    createProductRequest: (payload) => payload,
    createProductSuccess: (payload) => payload,
    createProductFailure: (err) => err,
});

export const fetchAllProduct = createActions({
    fetchAllProductRequest: undefined,
    fetchAllProductSuccess: (payload) => payload,
    fetchAllProductFailure: (err) => err,
});

export const deleteProduct = createActions({
    deleteProductRequest: undefined,
    deleteProductSuccess: (payload) => payload,
    deleteProductFailure: (err) => err,
});

export const updateProduct = createActions({
    updateProductRequest: (payload) => payload,
    updateProductSuccess: (payload) => payload,
    updateProductFailure: (err) => err,
});
