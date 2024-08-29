const express = require('express');
const router = express.Router();
const {getAllData, getSingleData, createData, updateData, deleteData} = require("../controllers/controller");

const app = express();

router.route("/").get(getAllData).post(createData);

router.route("/:id").get(getSingleData).put(updateData).delete(deleteData);

module.exports = router;