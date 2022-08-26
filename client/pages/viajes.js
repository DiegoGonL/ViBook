import {useEffect, useState} from 'react'
import useSWR from "swr";

const componentConfig = {
    url: process.env.NEXT_PUBLIC_URL_API+"viajes/",
    botonNav: "Tecnicos/as",
    titulo: "Técnicos/as EDIS",
    tituloLista: "Listado de todos los técnicos/as registrados",
    botonNuevo: "Nuevo Técnico/a"
}

const fetcher = (url) => fetch(url).then((res) => res.json());

const Viajes = () => {

    const { data, error } = useSWR(
        componentConfig.url,
        fetcher
    );
    if (data) {console.log("Los datos son", data)}
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";


    return (
        <div>
            Viajes

            {data.map((viaje) => (
                <div key={viaje.id}>
                    {viaje.id}
                    {viaje.nombre}
                </div>
            ))}

        </div>
    );
};

export default Viajes;
