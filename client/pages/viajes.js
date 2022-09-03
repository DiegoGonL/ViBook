import useSWR from "swr";
import {Button, Grid} from "@mui/material";
import Link from "next/link";
import CardViajes from "../components/CardViaje";
import uuid from "react-uuid";
import {useEffect, useState} from "react";

const componentConfig = {
    url: process.env.NEXT_PUBLIC_URL_API+"viajes",
    botonNav: "Tecnicos/as",
    titulo: "Técnicos/as EDIS",
    tituloLista: "Listado de todos los técnicos/as registrados",
    botonNuevo: "Nuevo Técnico/a"
}

const fetcher = (url) => fetch(url).then((res) => res.json());

const Viajes = () => {
    const [viajes, setViajes] = useState();

    const { data, error } = useSWR(
        componentConfig.url,
        fetcher
    );

    useEffect(() => {

        setViajes(data)

    }, [data]);

    if (data) {console.log("Los datos son", data)}
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";


    return (

        <Grid
            container
            spacing={0}
            style={{ backgroundColor: 'teal' }}
            minHeight={'100vh'}
            p={5}

        >
            <Grid container xs={12} item
                  style={{ backgroundColor: 'white' }}
                    p={5}
            >
                <Grid item md={8} xs={12}
                        align="left"
                >
                    <h2> Mis viajes</h2>
                    <hr/>
                </Grid>

                <Grid item md={4} xs={12} align="right">
                    <Button variant="contained" color="success" >
                        <Link href={'/viajes/viajesForm'}
                        > Nuevo viaje</Link>
                    </Button>

                </Grid>

            </Grid>

            <Grid container xs={12} item
                  style={{ backgroundColor: 'white' }}
                    p={5}
            >

                {viajes && viajes.map((viaje) => {
                        console.log(viaje)
                        return <CardViajes
                            key={uuid()}
                            id={viaje.id}
                            viaje={viaje.nombre}
                            description={viaje.description}
                            foto_portada={viaje.foto_portada}
                            setEstado={setViajes}

                        />
                    }
                )}
            </Grid>

            <Grid container xs={12} item
                  style={{ backgroundColor: 'white' }}
            p={5}
            >

                <Grid item xs={12} md={8}
                      align="left"
                >
                    <h2> Más Viajes (Sólo ver)</h2>
                    <hr/>
                </Grid>
            </Grid>

            <Grid container xs={12} item
                  style={{ backgroundColor: 'white' }}
            p={5}
            >


            </Grid>

        </Grid>

    )
};

export default Viajes;
