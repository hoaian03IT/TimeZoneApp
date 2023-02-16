export const createData = function (id, srcImg, name, price, quantity) {
    return { id, srcImg, name, price, quantity, total: price * quantity };
};
