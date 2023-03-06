import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Gideon",
      email: "admin@example.com",
      password: bcrypt.hashSync("test12"),
      isAdmin: true,
    },
    {
      name: "Gigi",
      email: "user@example.com",
      password: bcrypt.hashSync("test12"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id:'1',
      name: "Pineapple",
      slug: "fresh-fruit",
      category: "Fruits",
      image: "/images/pine3.jpg", // 679px × 829px
      price: 300,
      countInStock: 10,
      quantity: 1,
      rating: 4.5,
      numReviews: 10,
      description: "sweet fruit",
    },
    {
      // _id:'2',
      name: "Tomatoes",
      slug: "fresh-vegetable",
      category: "Vegetables",
      image: "/images/tom6.jpg",
      price: 100,
      countInStock: 40,
      quantity: 1,
      rating: 4.0,
      numReviews: 10,
      description: "Freesh tomato",
    },
    {
      // _id:'3',
      name: "Beans",
      slug: "Red Beans",
      category: "Legumes",
      image: "/images/reb6.png",
      price: 1000,
      countInStock: 15,
      quantity: 1,
      rating: 4.5,
      numReviews: 14,
      description: "legume",
    },
    {
      // _id:'4',
      name: "Carrots",
      slug: "vegetable",
      category: "Roots Vegetable",
      image: "/images/car3.jpg",
      price: 100,
      countInStock: 10,
      quantity: 1,
      rating: 4.5,
      numReviews: 10,
      description: "Fresh carot",
    },
  ],
};
export default data;
