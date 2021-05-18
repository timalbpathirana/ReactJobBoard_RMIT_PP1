import React from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  ButtonGroup,
} from "@material-ui/core";




const Header = () =>{
    return (
        <Box py={8} bgcolor="secondary.main" color="white">
            <Grid container justify="center">
                <Grid items xs={10}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h5">Huntr</Typography>
                        <ButtonGroup
                            variant="text"
                            color="primary"
                            aria-label="text primary button group"
                            size="medium"
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                disableLElevationm
                            >
                                Post a Job
                            </Button>
                            <Button variant="contained" color="primary" disableLElevation>
                            Log In
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header



 
