import axios from "axios";

export const loginAccountAPI = async (payload) =>
    await axios.post("/user/login", payload, {
        withCredentials: true,
    });

export const accessTokenAPI = async (payload) => await axios.post("/user/refresh_token", payload);

export const getUserAPI = async (token) =>
    await axios.get("/user/info", {
        headers: { Authorization: token },
    });

export const createProductAPI = async (payload) => await axios.post("/product/create", payload);

export const fetchAllProductAPI = async () => await axios.get("/product/all");

export const deleteProductAPI = async (id) => await axios.delete(`/product/delete/${id}`);

export const updateProductAPI = async (payload) => await axios.post("/product/update", payload);
