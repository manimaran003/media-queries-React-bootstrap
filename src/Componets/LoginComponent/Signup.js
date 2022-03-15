import React from "react";
import {Box, TextField,Grid,InputLabel,FormControl} from '@mui/material'
const Signup = () => {
    return (
        <Box>
              <FormControl variant="standard">
            <Grid container justifyContent={'center'}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6}>
                        <InputLabel shrink htmlFor="bootstrap-input">
         Firstname
        </InputLabel>
                            <TextField fullWidth/>
                        </Grid>
                        <InputLabel shrink htmlFor="bootstrap-input">
         Firstname
        </InputLabel>
                        <Grid item xs={6}>
                            <TextField fullWidth/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <Grid item xs={6}>
                        <TextField fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth/>
                    </Grid>
                </Grid>
            </Grid>
            </FormControl>
        </Box>
    )
}

export default Signup