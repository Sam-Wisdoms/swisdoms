import "./Contact.css"
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // FormData is no longer needed

    // Now you can directly use formData for your API call
    const json = JSON.stringify(formData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>

      <label>
        Message:
        {/* Make the textarea bigger with the rows attribute */}
        <textarea name="message" value={formData.message} rows={5} onChange={handleInputChange}></textarea>
      </label>

      <button type="submit">Submit Form</button>
    </form>
  );
}

export default Contact;


