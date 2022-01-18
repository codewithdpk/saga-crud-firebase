import firebase from "./config";
const studentConfig = firebase.database().ref("students");

export const addStudent = async (newStudent) => {
  await studentConfig.push(newStudent);
};

export const getAllStudents = (newStudent) => {
  // await studentConfig.push(newStudent);
};
