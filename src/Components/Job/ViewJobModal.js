import React from 'react';
import {
    Button,
    Grid,
    Box,
    Typography,
    makeStyles,
    Dialog,
    Select,
    MenuItem,
    DialogTitle,
    DialogContent,
    DialogActions,
    FilledInput,
    FormControl,
    FormHelperText,
    IconButton,
  } from "@material-ui/core";
import {Close as CloseIcon} from '@material-ui/icons';
import { format } from 'date-fns';

const useStyles = makeStyles((theme) =>({
    info:{
        '& > *':{
            margin: '4px'
        }
    },
    skillChip: {
        padding: "8px 10px",
        borderRadius: "10px",
        fontWeight: 600,
        fontSize: "12px",
        boxShadow: "0 2px 5px gba(0,0,0,.25)",
        margin: "0 10px",
        transition: "0.3s",
        backgroundColor: theme.palette.lightSecondary.main,
        color: "white",
      },
}));

export default props => {
    const classes = useStyles();

    return(
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
        <dialogTitle>
            <box display = "flex" justifyContent = "space-between" alignItems="center">
                {props.job.title} @ {props.job.companyName}
                <IconButton onClick={props.closeModal}>
                    <CloseIcon />
                </IconButton>
            </box>
        </dialogTitle>
        <DialogContent>
            <Box>
                {/*// Here has a problem when running, i think it beacuse the database do not enter Time data, if u want to running successful, please temp delete this box
                <box className ={classes.info} display="flex">
                    <Typography variant ="caption">Posted on: </Typography>
                    <Typography variant ="body2">{props.job.postedOn && format(props.job.postedOn, "dd/MMM/yyyy HH:MM")}</Typography>
                </box>
                */}                                                                                              
                <box className ={classes.info} display="flex">
                    <Typography variant ="caption">Job type: </Typography>
                    <Typography variant ="body2">{props.job.type}</Typography>
                </box>
                <box className ={classes.info} display="flex">
                    <Typography variant ="caption">Job location: </Typography>
                    <Typography variant ="body2">{props.job.location}</Typography>
                </box>
                <box className ={classes.info} display="flex">
                    <Typography variant ="caption">Job description: </Typography>
                    <Typography variant ="body2">{props.job.description}</Typography>
                </box>
                <box className ={classes.info} display="flex">
                    <Typography variant ="caption">Company name: </Typography>
                    <Typography variant ="body2">{props.job.companyName}</Typography>
                </box>
                <box className ={classes.info} display="flex">
                    <Typography variant ="caption">Company Websit: </Typography>
                    <Typography variant ="body2">{props.job.companyUrl}</Typography>
                </box>
                <box mt={0.5}>
                    <Typography variant ="caption">Skill: </Typography>
                    <Grid container alignItems = "center">
                        {props.job.skills && props.job.skills.map((skill) => ( <Grid item key ={skill} className ={classes.skillChip}>{skill}</Grid>))}
                    </Grid>
                </box>
            </Box>

        </DialogContent>
        <DialogActions>
            <Button variant="outlined" component="a" href={props.job.link} target="_blank">Apply</Button>
        </DialogActions>
    </Dialog>
)}