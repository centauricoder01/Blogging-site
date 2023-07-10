const { courseModel } = require("../Models/Courses");

async function addCourse(req, res) {
  try {
    
  } catch (error) {
    res.status(500).send({Error : error + "There is some Error occured"})
  }
}

module.exports = { addCourse };
