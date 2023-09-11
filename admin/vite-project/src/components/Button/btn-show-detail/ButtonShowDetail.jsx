import React from "react";

export default function ButtonShowDetail(props) {
<<<<<<< HEAD
    let ShowBoxModalDetail = (e) => {
       
    }
    return (
        <button type="button"
            onClick={ShowBoxModalDetail}
            data-bs-toggle={"modal"} 
            data-bs-target={"#staticBackdrop" + props.id}>
            Detail
        </button>
    )
=======
  let ShowBoxModalDetail = (e) => {
    console.log(props.name);
  };
  return (
    <button
      type="button"
      onClick={ShowBoxModalDetail}
      data-bs-toggle={"modal"}
      data-bs-target={"#staticBackdrop" + props.name}
    >
      Detail
    </button>
  );
>>>>>>> FE
}
