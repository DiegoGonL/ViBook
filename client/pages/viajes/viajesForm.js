import {Box, Button, CardHeader, FormControl, FormLabel, Input, TextField} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {useForm, Controller} from "react-hook-form";
import {useRouter} from "next/router";
import useSWR from "swr";

import editarElementoEnBd from "../../helpers/editarElementoEnBD";

const fetcher = (url) => fetch(url).then((res) => res.json());


const ViajesForm = () => {

    const router = useRouter();
    const { id } = router.query;
    const url = process.env.NEXT_PUBLIC_URL_API+`viajes?id=`+id;

    const handleClose = () => router.back();
    const { data, error } = useSWR(
        url,
        fetcher
    );

    const isAddMode = !id;

    const formOptions = { };

   /* if (!isAddMode) {
        formOptions.defaultValues = {id: data[0].id,
                                    nombre: data[0].nombre,
                                    descripcion: data[0].descripcion,
                                    foto_portada: data[0].foto_portada}
    }*/

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState, control } = useForm();
    const { errors } = formState;
/*    const onSubmit = (data) => console.log(data);*/

    function onSubmit(datosModificados) {
        return isAddMode
            ? createUser(datosModificados)
            : editarElementoEnBd(process.env.NEXT_PUBLIC_URL_API+`viajes/`+id, datosModificados);
    }


    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    if (data) {console.log("Los datos son", data)}
    return (
        <Box
            sx={{
                margin: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
        <Card sx={{
            minWidth: '50%',
        }}>
            <CardHeader title={id ? "Editar viaje":"Nuevo viaje"} />
            <CardContent>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="nombre"
                        control={control}
                        defaultValue= {!isAddMode ? data[0].nombre : ''}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Nombre del viaje"
                                variant="filled"
                                fullWidth={true}
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                        rules={{ required: 'First name required' }}
                    />
                    <Controller
                        name="description"
                        control={control}
                        defaultValue= {!isAddMode ? data[0].description : ''}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Descripción del viaje"
                                variant="filled"
                                fullWidth={true}
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                style={ {marginTop: '10px'} }
                            />
                        )}
                        rules={{ required: 'Last name required' }}
                    />
                    <Controller
                        name="foto_portada"
                        control={control}
                        defaultValue= {!isAddMode ? data[0].foto_portada : ''}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Foto de portada"
                                variant="filled"
                                fullWidth={true}
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                style={ {marginTop: '10px'} }
                            />
                        )}
                        rules={{ required: 'Email required' }}
                    />

                    <div>
                        <Button variant="contained" onClick={handleClose}
                            style={ {marginRight: '10px', marginTop: '10px'} }>

                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary"
                                style={ {marginTop: '10px'} }>
                            Signup
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
        </Box>
    );
};

export default ViajesForm;
