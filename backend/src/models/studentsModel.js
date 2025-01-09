import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    isStudent: { type: String, required: true },
    //   image: { type: String, required: true },
  },
  { collection: "Students", timestamps: true }
);

const student = mongoose.model("Students", studentsSchema);

export default student;
