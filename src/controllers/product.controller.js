import { productService } from "../services/product.service.js";
import { HttpStatusCode } from "../utilities/constants.js";

const getProducts = async (req, res) => {
  try {
    const result = await productService.getProducts();
    res.status(HttpStatusCode.OK).json({
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      data: error,
    });
  }
};

const getProductSingle = async (req, res) => {
  try {
    const result = await productService.getProductSingle(req.params.id);
    res.status(HttpStatusCode.OK).json({
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      data: error,
    });
  }
};

const getProdutcsById = async (req, res) => {
  try {
    const result = await productService.getProdutcsById(req.body);
    res.status(HttpStatusCode.OK).json({
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      data: error,
    });
  }
}
export const productController = { getProducts, getProductSingle, getProdutcsById };
