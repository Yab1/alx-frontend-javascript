export default function getStudentIdsSum(students) {
  /*
    using for...of
        let sum = 0
        for (const n of students) sum += n.id
        return sum
     */
  /*
    using map
      let sum = 0
      students.map((student) => (sum += student.id))
      return sum
     */
  //using reduce method

  //   const idArr
  return students
    .map((student) => student.id)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
