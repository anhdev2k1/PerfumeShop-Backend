import { productModel } from "../models/product.model.js";

const getProducts = async () => {
  try {
    const result = await productModel.getProducts();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getProductSingle = async (idProduct) => {
  try {
    const result = await productModel.getProductSingle(idProduct)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getProdutcsById = async (data) => {
  try {
    const result = await productModel.getProdutcsById(data);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export const productService = { getProducts, getProductSingle, getProdutcsById };

