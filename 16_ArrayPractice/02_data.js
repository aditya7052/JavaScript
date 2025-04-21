// ✅ Students Data
const students = [
    { id: 1, name: "Aditya", age: 21, grade: "A", marks: 85 },
    { id: 2, name: "Rahul", age: 22, grade: "B", marks: 78 },
    { id: 3, name: "Priya", age: 20, grade: "A", marks: 90 },
    { id: 4, name: "Sanya", age: 21, grade: "C", marks: 65 },
    { id: 5, name: "Rohan", age: 23, grade: "B", marks: 74 },
  ];
  
  // ✅ Select Table Body
  let tableBody = document.querySelector("#tableData tbody");
  
  // ✅ Loop through Students and Add Rows
  students.forEach((s) => {
    let row = document.createElement("tr"); // Create <tr>
    row.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.age}</td>
      <td>${s.grade}</td>
      <td>${s.marks}</td>
    `;
    tableBody.appendChild(row); // Append Row to Table
  });
  