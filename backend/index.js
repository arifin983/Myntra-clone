require("./db/config");
const productSchema = require("./db/product");
const express = require('express');
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
// app.post("/",async(req, resp)=>{
//   let addProduct = new productSchema(req.body);
//   let result = await addProduct.save();
//   console.log(result)
//   resp.send(result);
// })
app.get("/products",async(req, resp)=>{
 let products = await productSchema.find();
 //console.log(products);
 resp.send(products);

})
app.listen(5000)