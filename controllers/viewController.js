// const APIFeatures= require("../utils/apiFeatures")

const catchAsync = require('./../utils/catchAsync');
const StudentFunnel  = require('../models/studentFunnelModel');
const TeacherFunnel = require('../models/teacherFunnelModel');
const Course = require('../models/courseModel');
const Event = require('../models/eventModel');
exports.home = async (req, res, next) => {
  const courses = await Course.find({}).sort({ createdAt: -1 }).limit(2);
  const events= await Event.find({}).sort({ createdAt: -1 }).limit(3);
  res.status(200).render("index",{courses,events});
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