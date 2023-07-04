const express = require("express");
const Multer = require("multer");
const { products } = require("../controllers/controllers");
const router = express.Router();

const upload = Multer({
  storage: Multer.diskStorage({}),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post("/", upload.single("image"), products.createProduct);
router.get("/", products.getProducts);
router.get("/:id", products.getProductId);
router.delete("/:id", products.deleteProductId);
router.put("/:id", upload.single("image"), products.editProductId);


module.exports = router;
