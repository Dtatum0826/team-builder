import logo from './logo.svg';
import './App.css';
import Form from './form';
import React, { useState } from "react";

const App = () => {
  // 1. Set up state to keep your team members list
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Backend Engineer",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      role: "Frontend Engineer",
    },
  ]);

  // 2. Create a function to add a new member to the list of members
  const addTeamMember = (newMember) => {
    setTeamMembers([...teamMembers, newMember]);
  };

  // 3. Render your list of team members
  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <b>Name:</b> {member.name} <br />
            <b>Email:</b> {member.email} <br />
            <b>Role:</b> {member.role}
          </li>
        ))}
      </ul>

      {/* 4. Render the Form component */}
      <Form addTeamMember={addTeamMember} />
    </div>
  );
};


export default App;
