import React from 'react';
import {Grid, IconButton} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";

function Visor(props) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item id={"visor-header"} width={"100%"}>
                <Grid
                    container
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Grid item>
                        <h1>Visor Multimedia</h1>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item id={"viaje-card"}>VIAJE</Grid>
                            <ArrowForwardIos/>
                            <Grid item id={"etapa-card"}>ETAPA</Grid>
                            <ArrowForwardIos/>
                            <Grid item id={"parada-card"}>PARADA</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item id={"visor-body"} width={"100%"}>
                <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={4}
                >
                    <Grid item>
                        <IconButton>
                            <ArrowBackIos fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        {/*TODO: Reemplazar por un componente de card con la imagen descriocion y botones de borrar y editar*/}
                        <img width={"700px"} src={"https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image-300x203.jpg"} alt={"placeholder photo"}/>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <ArrowForwardIos fontSize={"large"}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Visor;