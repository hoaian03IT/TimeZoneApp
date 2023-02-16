import productModel from "../models/product.js";

class productController {
    async getAllProduct(req, res) {
        try {
            const allProduct = await productModel.find({});
            res.status(200).json(allProduct);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    }

    async createProduct(req, res) {
        try {
            const { name, description, image, price, quantity } = req.body;
            const newProduct = new productModel({ name, description, image, price, quantity });

            await newProduct.save();

            res.status(200).json({ msg: "Create a product successfully!", newProduct });
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const { _id, name, description, quantity, price, image } = req.body;
            console.log(req.body);
            const updatingProduct = await productModel.findByIdAndUpdate(
                _id,
                { name, description, quantity, price, image },
                { new: true }
            );
            await updatingProduct.save();
            res.status(200).json({ msg: "Update successfully" });
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            await productModel.deleteOne({ _id: req.params.id });
            res.status(200).json({ msg: "Delete successfully!" });
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    }
}

export default new productController();
