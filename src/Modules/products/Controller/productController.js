const express = require("express");
const Products = require("../Model/product");

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const products = await Products.create(req.body);
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts, createProduct };
