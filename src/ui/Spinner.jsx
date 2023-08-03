import React from "react";

function Spinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-300/30 backdrop-blur-sm">
      <span class="loading loading-bars loading-lg"></span>
    </div>
  );
}

export default Spinner;
