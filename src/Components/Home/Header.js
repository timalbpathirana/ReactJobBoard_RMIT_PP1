import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import logo_small from "../../Images/logo_small.png";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Clock from 'react-live-clock';

import {
    Button,
    Grid,
    Box,
    Avatar,
    CardHeader,
    Typography,
    IconButton,
    MenuItem,
    Menu
} from "@material-ui/core";
import { MatchMakingContext } from '../../App';



const Header = () => {
    
    const options = [
        'Log Out',
    ];

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const signOut = () => {
        localStorage.clear();
        sessionStorage.clear();
        setLoggedInUser([]);
        history.push('/')
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    let date = new Date();
    const { userLogIn } = useContext(MatchMakingContext);
    const [loggedInUser, setLoggedInUser] = userLogIn;
    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        avatar: {
            backgroundColor: red[500],
        },
        subColor: {
            color: 'yellow',
            fontSize: 12,
        }
    }));
    const classes = useStyles();
    return (
        <Box py={8} bgcolor="secondary.main" color="white" justifyItems="center">
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
                                history.push("/");
                            }}
                        />
                        {/* {loggedInUser.email &&
                        <div className={classes.root}>
                            <Button
                                
                                color="primary"
                                onClick={() => {
                                    history.push("/");
                                }}
                            >Dashboard
                            </Button>
                        </div>} */}
                    </Box>
                </Grid>

                <Box display="flex">
                    {!loggedInUser.email ?
                        <Link to="/dashboard" ><Button
                            variant="contained"
                            color="primary"
                            disableLElevation
                        >
                            Login
                        </Button></Link> : <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img src={loggedInUser.photo} alt="" width="90" height="auto" />
                                </Avatar>
                            }
                            action={
                                <div>
                                    <IconButton aria-label="settings" aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}>
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '10ch',
                                            },
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={signOut} >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>
                            }
                            title={loggedInUser.name}
                            subheader={<Typography className={classes.subColor}>{date.toDateString()}<br></br><Clock format={'HH:mm:ss A'} ticking={true} timezone={'Australia/Brisbane'} /></Typography>}
                        />}
                </Box>
            </Grid>
        </Box>
    );
};

export default Header;