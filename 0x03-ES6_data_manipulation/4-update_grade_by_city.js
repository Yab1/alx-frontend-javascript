export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const currentStudGrade = newGrades.find(
        (newGrade) => student.id === newGrade.studentId
      )[0];
      const grade = currentStudGrade ? currentStudGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
