import React, { useState } from "react";
import "./InputText.css";
import axios from "../../instance/axios";

export default function InputText() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("/add-note", { text }).then((res) => {
        console.log(res.data);
        window.location.reload();
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="input-div">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Take a note"
        />
      </form>
    </div>
  );
}
