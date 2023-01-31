export default function getStudentIdsSum(students, city) {
  return students.filter((student) => student.location === city);
}
