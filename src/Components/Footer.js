import React from "react";

export default function Footer() {
    const date = new Date().getFullYear();
    return (
      <div className="footer">
        <p className="foot">&copy; { date } | GameDevUtopia</p>
      </div>
    );
  }