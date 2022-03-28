import React from 'react';
import { Grid, Box, AppBar, Toolbar } from '@mui/material'
import TrainHeader from './TrainUi/TrainHeader';
import { makeStyles } from '@mui/styles'
import SearchTrainUi from './TrainUi/SearchTrainUi';
import TrainCard from './TrainUi/TrainCard'
const useStyles = makeStyles({
    hero_section: {
        minHeight: "848px",
        background: "#fff"
    },
})
const TrainRedux = () => {
    const classes = useStyles();
    return (
        <>
            <Box>
                <AppBar>
                    <Toolbar>
                        <TrainHeader />
                    </Toolbar>
                </AppBar>
                <Box sx={{ mt: 8 }}>
                    <Box className={classes.hero_section}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
                                <SearchTrainUi />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={8}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6} md={6} lg={6} xl={3}><TrainCard/></Grid>
                                            <Grid item xs={12}  sm={6} md={6} lg={6} xl={3}><TrainCard/></Grid>
                                            <Grid item xs={12}  sm={6} md={6} lg={6} xl={3}><TrainCard/></Grid>
                                            <Grid item xs={12}  sm={6} md={6} lg={6} xl={3}><TrainCard/></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default TrainRedux