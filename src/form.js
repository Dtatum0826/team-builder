import React from "react";
import { useState } from "react";

const Form = (props) => {
    // 5. State for the form
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      role: "",
    });
  
    // 6. Function to update form data
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    // 7. Function to handle form submit
    const handleSubmit = (event) => {
      event.preventDefault();
      props.addTeamMember(formData);
      setFormData({ name: "", email: "", role: "" });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Team Member</button>
      </form>
    );
  };
  
export default Form