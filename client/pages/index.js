import Link from "next/link";
import {Button, Grid} from "@mui/material";

export default function Home() {

  return (

      <Grid
          container
          spacing={0}
          align="center"
          justify="center"
          direction="column"
          style={{ backgroundColor: 'teal' }}
          minHeight={'100vh'}
           display={'flex'}
           alignItems={'center'}
           justifyContent={'center'}
      >
        <Grid item xs={12}>
               <h1> Welcome to ViBook App</h1>

        </Grid>

          <Grid item xs={12}>
              <Link href={'/viajes'}>
          <Button variant="contained" color="primary" >

              Ir a viajes

          </Button>
              </Link>
        </Grid>
      </Grid>
  )
}
