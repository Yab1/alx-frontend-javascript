export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(
    (student) => student.location === city
  );
  newGrades.map((newGrade) => {
    for (const studentObj of filteredStudents) {
      if (studentObj.id === newGrade.studentId) {
        studentObj['grade'] = newGrade.grade;
      }
    }
  });
  filteredStudents.map((studentsListGrade) => {
    if (!studentsListGrade.grade) {
      studentsListGrade['grade'] = 'N/A';
    }
  });
  return filteredStudents;
}
