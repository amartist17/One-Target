const StudentFunnel = require('../models/studentFunnelModel')
const TeacherFunnel = require('../models/teacherFunnelModel')
const Courses = require('../models/courseModel')
const Events = require('../models/eventModel');
const catchAsync = require('../utils/catchAsync');


exports.studentFunnel = catchAsync(async (req, res, next) => {
    let newStudent = await StudentFunnel.create(req.body)   
    console.log(req.body) 
    res.redirect('https://web.classplusapp.com/login?orgCode=tcnfb')
});
exports.teacherFunnel = catchAsync(async (req, res, next) => {
    let newTeacher = await TeacherFunnel.create(req.body)   
    console.log(req.body) 
    res.redirect('/')
})

exports.addCourse =catchAsync(async (req, res, next) => {
    let newCourse = await Courses.create(req.body)   
    console.log(req.body) 
    res.json({
        status: 'success',
    })
})

exports.addEvent = catchAsync(async (req, res, next) => {
    let newCourse = await Events.create(req.body)   
    console.log(req.body) 
    res.json({
        status: 'success',
    })
})