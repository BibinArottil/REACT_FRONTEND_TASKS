import React, { useEffect, useState } from "react";
import axios from "../instance/axios";
import Header from "../component/Header/Header";
import InputText from "../component/InputText/InputText";
import Card from "../component/Card/Card";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("get-note").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <InputText />
      <div className="note-list">
        <Card note={data} />
      </div>
    </>
  );
}
