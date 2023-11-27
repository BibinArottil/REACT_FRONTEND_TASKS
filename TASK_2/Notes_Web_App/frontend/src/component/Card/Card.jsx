import React from "react";
import axios from "../../instance/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

export default function Card({ note }) {
  const handleClick = (id) => {
    axios.delete("/delete/" + id).then((res) => {
      alert(res.data);
      window.location.reload();
    });
  };

  return (
    <>
      {note?.map((data, index) => {
        return (
          <div key={index} className="card-div">
            <h4>{data.text}</h4>
            <div className="inner">
              <p>{data.created_at}</p>
              <FontAwesomeIcon
                onClick={() => handleClick(data.id)}
                icon={faTrash}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
