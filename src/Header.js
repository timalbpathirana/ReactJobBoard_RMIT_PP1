
import {makeStyles} from "@material-ui/core/styles";
import {Box,Grid} from '@material-ui/core';
import {styles} from './material-ui.js';
import logo_small from "./Statics/Images/logo_small.png";
const useStyle = makeStyles(styles);

const Header = () =>{
    const classes = useStyle();
  
  return (
    <Box py={8} className={classes.header}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid items xs={6}>
                    <Box display="flex">
                        <img
                            src={logo_small}
                            alt="logo"
                            onClick={() => {
                                console.log("back to home page")
                            }}
                        />
                    </Box>
                </Grid>


            </Grid>

        </Box> 

  );
}

export default Header;
