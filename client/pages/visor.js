import React from 'react';
import {Grid, IconButton} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import VisorMultimediaCard from "../components/visorMultimediaCard";

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
                        <VisorMultimediaCard></VisorMultimediaCard>
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