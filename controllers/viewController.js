// const APIFeatures= require("../utils/apiFeatures")

const catchAsync = require('./../utils/catchAsync')

exports.home = async (req, res, next) => {
  res.status(200).render("index");
};

exports.login = async (req, res, next) => {
  res.status(200).render('login');
};

exports.dashboard = catchAsync(async (req, res, next) => {
  // let orders = await Order.find()
  
  res.status(200).render('dashboard/home');
});

exports.addCourse = catchAsync(async (req, res, next) => {
  // let orders = await Order.find()
  
  res.status(200).render('dashboard/add-course');
});

exports.addEvent = catchAsync(async (req, res, next) => {
  // let orders = await Order.find()
  
  res.status(200).render('dashboard/add-event');
});