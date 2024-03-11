import React, { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div className="cardUser" key={user.id}>
          <img src={user.avatar} alt="" />
          <h3>{user.first_name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
