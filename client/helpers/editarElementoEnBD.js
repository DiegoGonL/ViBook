
const editarElementoEnBd = (url, data, handleClose) => {

    console.log(url);
    console.log(JSON.stringify(data));
    fetch(url, {
        method: "PUT", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((error) => console.error("Error:", error))
        .then((response) => {
            console.log("Success:", response);
            handleClose();
        })


  };
  
  export default editarElementoEnBd;