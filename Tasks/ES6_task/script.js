// Toggle functionality for all sections
document.querySelectorAll(".toggle-heading").forEach((heading) => {
  heading.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const triangle = this.querySelector(".triangle");
    content.style.display = content.style.display === "none" ? "block" : "none";
    triangle.style.transform =
      content.style.display === "none" ? "rotate(0deg)" : "rotate(90deg)";
  });
});

// 1. Sum Alert (Self-Invoking Function)
document
  .getElementById("sum-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    (function (a, b) {
      const sum = a + b;
      alert(`The sum is: ${sum}`);
    })(num1, num2);
  });

// 2. Loop Examples toggle content initialization
document.querySelector(".toggle-heading").nextElementSibling.style.display =
  "none";

// 3. Spread Operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
document.getElementById(
  "spread-result"
).innerText = `Combined Array: ${combinedArray.join(", ")}`;

// 4. Student Class
class Student {
  constructor(name, university, faculty, finalGrade) {
    this.name = name;
    this.university = university;
    this.faculty = faculty;
    this.finalGrade = finalGrade;
  }

  printData() {
    return `${this.name} is a student in faculty of ${this.faculty} in university ${this.university}`;
  }
}

document
  .getElementById("student-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const university = document.getElementById("university").value;
    const faculty = document.getElementById("faculty").value;
    const finalGrade = document.getElementById("finalGrade").value;
    const student = new Student(name, university, faculty, finalGrade);
    console.log(student.printData());
    document.getElementById("student-data").innerText = student.printData();
  });

// Redirect to tips page
document.getElementById("tips-button").addEventListener("click", function () {
  window.location.href = "tips.html";
});
