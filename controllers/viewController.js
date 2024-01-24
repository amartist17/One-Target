// const APIFeatures= require("../utils/apiFeatures")

const catchAsync = require('./../utils/catchAsync');
const StudentFunnel  = require('../models/studentFunnelModel');
const TeacherFunnel = require('../models/teacherFunnelModel')
exports.home = async (req, res, next) => {
  res.status(200).render("index");
};

exports.login = async (req, res, next) => {
  res.status(200).render('login');
};

exports.dashboard = catchAsync(async (req, res, next) => {
  // let orders = await Order.find()
  const students = await StudentFunnel.find()
  const teachers = await TeacherFunnel.find()

  res.status(200).render('dashboard/home',{students,teachers});
});

exports.addCourse = catchAsync(async (req, res, next) => {
  // let orders = await Order.find()
  
  res.status(200).render('dashboard/add-course');
});

exports.addEvent = catchAsync(async (req, res, next) => {
  // let orders = await Order.find()
  res.status(200).render('dashboard/add-event');
});