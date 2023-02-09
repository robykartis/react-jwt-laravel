import React from "react";
import Navbar from "../components/Navbar";

function Layouts({ children }) {
  return (
    <React.Fragment>
      <div className="bg-light">
        <Navbar />
        <main className="p-5 mt-5">
          <div>{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Layouts;
