const { courseModel } = require("../Models/Courses");
import { Request, Response } from "express";


async function addCourse(req:Request, res:Response) {
  try {
    
  } catch (error) {
    res.status(500).send({Error : error + "There is some Error occured"})
  }
}

export { addCourse };
