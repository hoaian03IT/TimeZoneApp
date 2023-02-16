import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, trim: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        image: { type: Object },
        favorite: { type: Boolean },
    },
    { timestamps: true }
);

export default new mongoose.model("productSchema", productSchema);
