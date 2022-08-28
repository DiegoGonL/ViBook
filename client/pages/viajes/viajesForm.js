import React, {useRef} from 'react';
import {Box, Button, CardHeader, FormControl, FormLabel, Input, TextField} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {useForm, Controller} from "react-hook-form";


const ViajesForm = ({action, handleClose}) => {

    const { handleSubmit, reset, control } = useForm();
    const onSubmit = (data) => console.log(data);

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
            <CardHeader title="Nuevo viaje" />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="First Name"
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
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Last Name"
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
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Email"
                                variant="filled"
                                fullWidth={true}
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="email"
                                style={ {marginTop: '10px'} }
                            />
                        )}
                        rules={{ required: 'Email required' }}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Password"
                                variant="filled"
                                fullWidth={true}
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="password"
                                style={ {marginTop: '10px'} }
                            />
                        )}
                        rules={{ required: 'Password required' }}
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
