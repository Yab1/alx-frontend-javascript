export default function updateStudentGradeByCity(students, city, newGrades) {
  // filter students by city
  const filteredStudents = students.filter(
    (student) => student.location === city
  );
  // added grade property on the students list
  newGrades.map((newGrade) => {
    for (const studentObj of filteredStudents) {
      if (studentObj.id === newGrade.studentId) {
        studentObj['grade'] = newGrade.grade;
      }
    }
  });
  // If a student doesn’t have grade in newGrades, the final grade should be N/A
  filteredStudents.map((studentsListGrade) => {
    if (!studentsListGrade.grade) {
      studentsListGrade['grade'] = 'N/A';
    }
  });

  return filteredStudents;
}
