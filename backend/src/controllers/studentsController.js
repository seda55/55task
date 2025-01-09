import student from "../models/studentsModel.js";
// import mongoose from "mongoose";

export const addStudent = async (req, res) => {
  try {
    const newStudent = new student(req.body);

    await newStudent.save();

    return res
      .status(201)
      .json({ success: true, message: "Student added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await student.find();
    return res.status(200).json({ success: true, students });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const findStudent = await student.findById(id);

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Invalid student id" });
    // }

    if (!findStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }
    return res.status(200).json({ success: true, student: findStudent });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteStudent = await student.findByIdAndDelete(id);
    if (!deleteStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student not deleted..." });
    } else {
      return res
        .status(200)
        .json({ success: true, message: "Student deleted successfully" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
 
  try {
    const updatedStudent= await student.findByIdAndUpdate(id, req.body)
    if (!updatedStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student not updated..." });
    } else {
      return res
        .status(200)
        .json({ success: true, message: "Student updated successfully" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }

};
