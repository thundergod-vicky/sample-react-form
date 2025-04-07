import React, { useState } from "react";
import ListView from "./ListView";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    fetch("http://localhost:5000/users",{
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("User added successfully");
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      }
    );
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />

    </form>
  );
}

export default App;