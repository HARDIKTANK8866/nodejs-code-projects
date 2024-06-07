const mongoose = require("mongoose");

const savaData = async () =>
  await mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "max 100",
    price: 200,
    brand: "maxx",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "max 6" },
    {
      $set: { price: 550, name: "max pro 6" },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteMany({ brand: "MOTO" });
  console.log(data);
};
deleteInDB()

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find({ name: "max pro 611" });
  console.log(data);
};

findInDB();
