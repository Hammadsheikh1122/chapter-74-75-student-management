
function Student(name, rollNumber, marks) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.marks = marks;
}

Student.prototype.showDetails = function() {
    console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}, Marks: ${this.marks}`);
};

Student.prototype.updateMarks = function(newMarks) {
    this.marks = newMarks;
};

Student.prototype.institute = "Saylani Mass IT Training";

let student1 = new Student("Hammad", 101, 85);
let student2 = new Student("Ali", 102, 90);
let student3 = new Student("Ahmed", 103, 78);

student1.showDetails();
student2.showDetails();
student3.showDetails();

student1.updateMarks(95);

console.log("After Updating Marks:");
student1.showDetails();

console.log("Same showDetails Method:", student1.showDetails === student2.showDetails);
console.log("name in student1:", "name" in student1);
console.log("showDetails in student1:", "showDetails" in student1);
console.log("Own name:", student1.hasOwnProperty("name"));
console.log("Own showDetails:", student1.hasOwnProperty("showDetails"));
console.log("Method type:", typeof student1.showDetails);

console.log("Student 1 Institute:", student1.institute);
console.log("Student 2 Institute:", student2.institute);
console.log("Student 3 Institute:", student3.institute);

console.log("Prototype:", Object.getPrototypeOf(student1) === Student.prototype);

