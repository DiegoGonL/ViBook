/*import { confirmAlert } from "react-confirm-alert"; */// Import
/*import "react-confirm-alert/src/react-confirm-alert.css";*/ // Import css

const theme = {};

const borrarElementoEnBd = (url, setEstado, mensaje) => {

    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => {
            console.log("Success:", response);
            setEstado(response);
        });


/*  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <>
          <style jsx>{`
            .botonera {
              text-align: center;
              margin: 2rem;
            }
            .botonera button {
              margin-left: 1rem;
              margin: 1rem;
              padding: 1rem;
              border-radius: 5px;
            }
            .botonera button.btn-no{
              background-color: #dd6b20;
              color: #fff;

            }
            .botonera button.btn-si{
              background-color: #00a680;
              color: white;
             
            }
          `}</style>

          <div className="botonera">
            <h1>Estás Seguro?</h1>
            <p>{mensaje}</p>
            <button className="btn-no" onClick={onClose}>
              No
            </button>
            <button className="btn-si"
              onClick={() => {
                fetch(url, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .catch((error) => console.error("Error:", error))
                  .then((response) => {
                    console.log("response:", response);
                    setEstado(response);
                  });
                onClose();
              }}
            >
              Sí, bórralo!
            </button>
          </div>
        </>
      );
    },
  });*/
};

export default borrarElementoEnBd;
