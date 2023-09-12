import React from "react";

export default function ButtonShowDetail(props) {
  let ShowBoxModalDetail = (e) => {};
  return (
    <button
      type="button"
      onClick={ShowBoxModalDetail}
      data-bs-toggle={"modal"}
      data-bs-target={"#staticBackdrop" + props.id}
    >
      Detail
    </button>
  );
}
