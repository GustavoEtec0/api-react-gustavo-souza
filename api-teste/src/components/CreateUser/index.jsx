import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  function createUser(e) {
    e.preventDefault();
    let user = { name: name, job: job };

    axios
      .post("https://reqres.in/api/users", user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      CreateUser
      <form onSubmit={createUser} className="form">
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Digite sua prifissão"
          value={job}
          onChange={(event) => {
            setJob(event.target.value);
          }}
        />
        <button type="submit">enviar</button>
      </form>
    </div>
  );
}
