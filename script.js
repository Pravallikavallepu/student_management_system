let students = [];

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const id = document.getElementById("id").value.trim();

  if (!name || !id) {
    alert("Please enter both name and ID.");
    return;
  }

  if (students.some(s => s.id === id)) {
    alert("Student ID already exists.");
    return;
  }

  students.push({ id, name, attendance: "Absent", grade: "-" });
  updateTable();
  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
}

function markAttendance() {
  const id = document.getElementById("searchId").value.trim();
  const student = students.find(s => s.id === id);
  if (student) {
    student.attendance = "Present";
    updateTable();
  } else {
    alert("Student not found.");
  }
}

function assignGrade() {
  const id = document.getElementById("searchId").value.trim();
  const grade = document.getElementById("grade").value.trim().toUpperCase();
  if (!"ABCDEF".includes(grade)) {
    alert("Enter a valid grade (A-F).");
    return;
  }
  const student = students.find(s => s.id === id);
  if (student) {
    student.grade = grade;
    updateTable();
  } else {
    alert("Student not found.");
  }
}

function deleteStudent() {
  const id = document.getElementById("searchId").value.trim();
  const initialCount = students.length;
  students = students.filter(s => s.id !== id);
  if (students.length === initialCount) {
    alert("Student not found.");
  }
  updateTable();
}

function updateTable() {
  const tbody = document.getElementById("studentTableBody");
  tbody.innerHTML = "";
  students.forEach(s => {
    tbody.innerHTML += `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.attendance}</td>
        <td>${s.grade}</td>
      </tr>
    `;
  });
}

function postAnnouncement() {
  const text = document.getElementById("announcementInput").value.trim();
  if (!text) {
    alert("Please enter a message.");
    return;
  }
  const div = document.createElement("div");
  div.className = "announcement";
  div.textContent = text;
  document.getElementById("announcementList").prepend(div);
  document.getElementById("announcementInput").value = "";
}

function submitStudentQuery() {
  const name = document.getElementById("studentName").value.trim();
  const query = document.getElementById("studentQuery").value.trim();
  if (!name || !query) {
    alert("Please enter your name and query.");
    return;
  }
  const div = document.createElement("div");
  div.className = "query-box";
  div.innerHTML = `<strong>${name}:</strong> ${query}`;
  document.getElementById("studentQueryList").prepend(div);
  document.getElementById("studentName").value = "";
  document.getElementById("studentQuery").value = "";
}

function submitParentFeedback() {
  const name = document.getElementById("parentName").value.trim();
  const feedback = document.getElementById("parentFeedback").value.trim();
  if (!name || !feedback) {
    alert("Please enter your name and feedback.");
    return;
  }
  const div = document.createElement("div");
  div.className = "feedback-box";
  div.innerHTML = `<strong>${name}:</strong> ${feedback}`;
  document.getElementById("parentFeedbackList").prepend(div);
  document.getElementById("parentName").value = "";
  document.getElementById("parentFeedback").value = "";
}
