
let students = [
    { name: "Rahul", marks: 95 },
    { name: "Ananya", marks: 88 },
    { name: "Arjun", marks: 92 },
    { name: "Priya", marks: 76 },
    { name: "Rohan", marks: 90 }
];
let studentsWithCGPA = students.map(function(student) {

    student.cgpa = student.marks / 10;

    return student;
});
let topStudents = studentsWithCGPA.filter(function(student) {
    return student.cgpa >= 9;
});
console.log("Students with CGPA 9 or higher:");

topStudents.forEach(function(student) {
    console.log(student.name + " - CGPA: " + student.cgpa);
});
let count = topStudents.reduce(function(total, student) {
    return total + 1;
}, 0);

console.log("Total students with CGPA 9 or higher:", count);