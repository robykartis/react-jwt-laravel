import React from "react";
import NavbarDashboard from "../navbar/NavbarDashboard";

function LayoutsDashboard({ children }) {
  return (
    <React.Fragment>
      <div className="bg-light">
        <NavbarDashboard />
        <main className="p-5 mt-5">
          <div>{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default LayoutsDashboard;
