import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardActionArea, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";

export default function CardViaje(
    {id, viaje, description, foto_portada}
) {
    return (

    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={foto_portada}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {viaje}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography   variant="soft"
                              color="danger"
                              borderRadius="xs"
                              display="inline-flex"
                          py={1}
                              fontSize="sm"
                              fontWeight="bold"
                              sx={{ '--Typography-gap': '0.5rem' }}
                >
                    12/03/2022 - 22/03/2022
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            <Link href={'/viajes/viajesForm?id='+id }>
            <IconButton aria-label="edit">

                 <EditIcon />

            </IconButton></Link>

        </CardActions>
    </Card>

    )

}
