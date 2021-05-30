
import {makeStyles} from "@material-ui/core/styles";
import {Box,Grid,Link,Container} from '@material-ui/core';
import {styles} from './material-ui.js';

const useStyle = makeStyles(styles);

const Footer = () =>{
    const classes = useStyle();
  
  return (
        <Box px={{xs:3,sm:10}} py={{xs:5,sm:10}} className={classes.footer} >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Tools</Box>
                        <Box>
                            <Link href="/" color="inherit">Profile</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Company Reviews</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Teams</Box>
                        <Box>
                            <Link href="/" color="inherit">About our Team</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Contact us</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}><strong>Information</strong> and <strong>Copyright</strong></Box>
                        <Box>
                            Powered by Node.js, MongoDB, and React
                        </Box>
                        <Box>
                            You may view the <Link href='https://github.com/timalbpathirana/ReactJobBoard_RMIT_PP1' >Source Code</Link> behind this project on GitHub
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign = "center" pt={{xs:5,sm:10}} pb = {{xs:5,sm:0}}>
                        Huntr Workshop &reg;{new Date().getFullYear()}  PP1-Teams-10
                </Box>
            </Container>
        </Box>

  );
}

export default Footer;
