export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const currentStudGrade = newGrades.filter(
        (newGrade) => student.id === newGrade.studentId
      )[0];
      return currentStudGrade
        ? { ...student, grade: currentStudGrade.grade }
        : { ...student, grade: 'N/A' };
    });
}
