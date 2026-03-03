import { useState } from "react";
import Login from "./components/Login.jsx";
import "./App.css";

function StudentHome ({ student }) {
  return (
    <div style={{ padding: 24, color: "white" }}>
      <h1>Welcome, {student.name}!</h1>
      <p>Your ID: {student.id}</p>
      <p>Your Grade: {student.grade}</p>
    </div>
  );
}

export default function App() {
  const [student, setStudent] = useState(null);
  
  return student ? (
    <StudentHome student={student} />
  ) : (
    <Login setStudent={setStudent} />
  );
}
