import {useEffect, useState} from 'react'

const componentConfig = {
    url: process.env.NEXT_PUBLIC_URL_API+"viajes/",
    botonNav: "Tecnicos/as",
    titulo: "Técnicos/as EDIS",
    tituloLista: "Listado de todos los técnicos/as registrados",
    botonNuevo: "Nuevo Técnico/a"
}


const Viajes = () => {

    const [elementos, setElementos] = useState([]); // Array de todas las tareas

    useEffect(() => {
        fetch(componentConfig.url)
            .then((response) => response.json())
            .then((data) => {
                setElementos(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            Viajes
        </div>
    );
};

export default Viajes;
