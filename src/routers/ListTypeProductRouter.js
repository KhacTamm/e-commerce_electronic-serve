import express from "express";
import {
  createNewTypeProduct,
  deleteTypeProduct,
  getAllTypeProduct,
} from "../controllers/ListTypeProductController.js";
import  {upload}  from "../untils/until.js";

const ListTypeProductRouter = express.Router();

ListTypeProductRouter.get("/", getAllTypeProduct);
ListTypeProductRouter.post(
  "/create",
  upload.single("image"),
  createNewTypeProduct
);
ListTypeProductRouter.delete(
  "/delete/:id",
  deleteTypeProduct
);

// deleteTypeProduct.delete(
//   "/delete/:id",
//   // isAuth,
//   // isAdmin,
//   upload.single("image"),
//   DeleteProduct
// );

export default ListTypeProductRouter;
