import React from "react";

function Button(props) {
  return (
    <button
      className={
        props.btn === "view"
          ? "text-blue-600 hover:underline"
          : props.btn === "edit"
          ? "text-yellow-600 hover:underline"
          : "text-red-600 hover:underline"
      }
      onClick={props.onClick}
      disabled={props.isLoading}
    >
      {props.isLoading
        ? "Menghapus..."
        : `[${props.btn.charAt(0).toUpperCase() + props.btn.slice(1)}]`}
    </button>
  );
}

export default Button;
