const StudentFunnel = require('../models/studentFunnelModel')
const TeacherFunnel = require('../models/teacherFunnelModel')
exports.studentFunnel = async (req, res, next) => {
    let newStudent = await StudentFunnel.create(req.body)   
    console.log(req.body) 
    res.redirect('https://web.classplusapp.com/login?orgCode=tcnfb')
};
exports.teacherFunnel = async (req, res, next) => {
    let newTeacher = await TeacherFunnel.create(req.body)   
    console.log(req.body) 
    res.redirect('/')
};