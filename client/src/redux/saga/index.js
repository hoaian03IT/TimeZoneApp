import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "~/api";
import { routes } from "~/config";
import * as actions from "../actions";

// account
function* loginAccount(action) {
    try {
        const res = yield call(api.loginAccountAPI, action.payload.valueInput);
        console.log("[User login]: ", res);
        yield put(
            actions.loginAccount.loginAccountSuccess(res.data, {
                expires: 7,
                secure: true,
            })
        );

        yield setTimeout(() => action.payload.navigate(routes.home), 500);
    } catch (error) {
        yield put(actions.loginAccount.loginAccountError(error));
    }
}

function* getUserInfo(action) {
    try {
        const res = yield call(api.getUserAPI, action.payload);
        console.log("[User info]: ", res);
        yield put(actions.getUserInfo.getUserInfoSuccess(res.data));
    } catch (error) {
        yield put(actions.getUserInfo.getUserInfoSuccess(error));
    }
}

function* updateAccessToken(action) {
    try {
        const res = yield call(api.accessTokenAPI, action.payload);
        console.log("[Access Token]: ", res);
        yield put(actions.getAccessToken.getAccessTokenSuccess(res.data));
    } catch (error) {
        yield put(actions.getAccessToken.getAccessTokenFailure(error));
    }
}

// product - admin
function* createProduct(action) {
    try {
        const res = yield call(api.createProductAPI, action.payload);
        yield put(actions.createProduct.createProductSuccess(res.data.newProduct));
    } catch (error) {
        yield put(actions.createProduct.createProductFailure(error));
    }
}

function* fetchAllProduct() {
    try {
        const res = yield call(api.fetchAllProductAPI);
        console.log("[All products]: ", res);

        yield put(actions.fetchAllProduct.fetchAllProductSuccess(res.data));
    } catch (error) {
        yield put(actions.fetchAllProduct.fetchAllProductFailure(error));
    }
}

function* deleteProduct(action) {
    try {
        const res = yield call(api.deleteProductAPI, action.payload);
        yield put(actions.deleteProduct.deleteProductSuccess({ _id: action.payload, msg: res.data.msg }));
    } catch (error) {
        yield put(actions.deleteProduct.deleteProductFailure(error));
    }
}

function* updateProduct(action) {
    try {
        const res = yield call(api.updateProductAPI, action.payload);
        yield put(actions.updateProduct.updateProductSuccess({ data: action.payload, msg: res.data.msg }));
    } catch (error) {
        yield put(actions.updateProduct.updateProductFailure(error));
    }
}
function* mySaga() {
    yield takeLatest(actions.loginAccount.loginAccountRequest, loginAccount);
    yield takeLatest(actions.getAccessToken.getAccessTokenRequest, updateAccessToken);
    yield takeLatest(actions.createProduct.createProductRequest, createProduct);
    yield takeLatest(actions.getUserInfo.getUserInfoRequest, getUserInfo);
    yield takeLatest(actions.fetchAllProduct.fetchAllProductRequest, fetchAllProduct);
    yield takeLatest(actions.deleteProduct.deleteProductRequest, deleteProduct);
    yield takeLatest(actions.updateProduct.updateProductRequest, updateProduct);
}

export { mySaga };
