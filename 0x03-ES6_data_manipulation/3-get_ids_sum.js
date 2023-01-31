export default function getStudentIdsSum(students) {
  return students
    .map((student) => student.id)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
