import { getType } from "@reduxjs/toolkit";
import { deleteProduct, fetchAllProduct, createProduct, updateProduct } from "../actions/productActions";
import { INIT_STATE } from "~/initState";
import { updateToast } from "~/utils/updateToast";

export default function productReducer(state = INIT_STATE.product, action) {
    switch (action.type) {
        case getType(fetchAllProduct.fetchAllProductRequest):
            return {
                ...state,
                isLoading: true,
            };

        case getType(fetchAllProduct.fetchAllProductSuccess):
            updateToast("success", "Fetch all products successfully!");
            return {
                ...state,
                list: action.payload,
                isLoading: false,
            };

        case getType(fetchAllProduct.fetchAllProductFailure):
            updateToast("error", action.payload.msg);
            return {
                ...state,
                isLoading: false,
            };

        case getType(createProduct.createProductRequest):
            return {
                ...state,
                isLoading: true,
            };
        case getType(createProduct.createProductSuccess):
            updateToast("success", "Create product successfully!");
            return {
                ...state,
                list: state.list.push(action.payload),
                isLoading: false,
            };
        case getType(createProduct.createProductFailure):
            // updateToast("error", action.payload.msg);
            return {
                ...state,
                isLoading: false,
            };

        case getType(deleteProduct.deleteProductRequest):
            updateToast("loading", "Deleting...");
            return {
                ...state,
                isLoading: true,
            };
        case getType(deleteProduct.deleteProductSuccess):
            console.log(action.payload);
            updateToast("success", action.payload.msg);
            return {
                ...state,
                list: state.list.filter((item) => item._id !== action.payload._id),
                isLoading: false,
            };

        case getType(deleteProduct.deleteProductFailure):
            updateToast("error", action.payload.msg);
            return {
                ...state,
                isLoading: false,
            };

        case getType(updateProduct.updateProductRequest): {
            return {
                ...state,
                isLoading: true,
            };
        }

        case getType(updateProduct.updateProductSuccess): {
            updateToast("success", action.payload.msg);
            const index = state.list.findIndex((item) => item._id === action.payload.data._id);
            const newList = state.list;
            newList[index] = { ...state.list[index], ...action.payload.data };
            return {
                ...state,
                isLoading: false,
                list: newList,
            };
        }

        case getType(updateProduct.updateProductFailure):
            updateToast("error", action.payload.msg);
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}
