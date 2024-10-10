const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  let newArr =[];
  let k=0;
  for(let i =0;i<students.length;i++){
    if(students[i].score>80){
      newArr[k]=students[i].name;
      k++;
    }
  }
  console.log(newArr);
  return newArr;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  let sumAge = 0;
  
  for (let i = 0; i < students.length; i++) {
    sumAge += students[i].age;
  }
  
  return students.length > 0 ? sumAge / students.length : 0;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student);
  return students;
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, char) {
  console.log("Name to remove:", char);

  let index = students.findIndex(student => student.name === char);

  if (index !== -1) {
    students.splice(index, 1);
  } else {
    console.log("Student not found.");
  }
  console.log("Updated students array:", students);

  return students;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };