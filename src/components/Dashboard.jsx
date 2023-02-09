import React, { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

function Dashboard() {
  const { http } = AuthUser();
  const [userdetail, setUserdetail] = useState();
  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = () => {
    http.post("/me").then((res) => {
      setUserdetail(res.data);
    });
  };

  function renderElement() {
    if (userdetail) {
      return (
        <div>
          <h1>Dashboard</h1>
          <h1>Name</h1>
          <p>{userdetail.name}</p>
          <h1>Email</h1>
          <p>{userdetail.email}</p>
        </div>
      );
    } else {
      return <p>Loading.....</p>;
    }
  }
  return <div>{renderElement()}</div>;
}

export default Dashboard;
