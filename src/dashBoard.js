import {Drawer, IconButton, Toolbar, Typography,List,ListItem,ListItemText,ListItemIcon, Divider} from '@material-ui/core';
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {styles} from './material-ui.js';
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import { faAd, faEraser, faPersonBooth, faRegistered, faSignOutAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyle = makeStyles(styles);

const DashBoard = () =>{
  const classes = useStyle();
  //control drawer open/close
  const [isOpened,setIsOpened] = useState(true);

  
  const [selectedMenu, setSelectedMenu] = useState('');
  const [userStatus] = useState("Contractor"); //mock
  const signOut = ()=>{
      console.log("signOut successful");
  }//mock
 
  return (
    


    <div className={classes.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={()=>setIsOpened(!isOpened)}
            className={classes.icon}
          >
            {!isOpened?<MenuIcon />:<ChevronLeftIcon />}
          </IconButton>
          <Typography 
            variant="h6"
            className={classes.title}
          >
            This is {userStatus} Dashboard
          </Typography>
        </Toolbar>
      
      <div className={classes.container}>
        <Drawer
          variant="permanent"
          classes={{
            paper:clsx(classes.drawer,{
              [classes.closed]:!isOpened,
              [classes.opened]:isOpened,
            }),
          }}//overriding
        >
        {userStatus === 'Contractor' && 
            <List>
                <ListItem button onClick={() => setSelectedMenu('POSTJOB')}> {/*className={selectedMenu === 'POSTJOB' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}*/}
                   <ListItemIcon><FontAwesomeIcon icon={faAd} /></ListItemIcon>{/*style={{ width: "16px", height: "16px" }}*/}
                   <ListItemText primary="Post a job"/>
                </ListItem>
                <ListItem button onClick={() => setSelectedMenu('DELETEPOST')}> {/*className={selectedMenu === 'DELETEPOST' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}*/}
                    <ListItemIcon><FontAwesomeIcon icon={faEraser} /></ListItemIcon>{/*style={{ width: "16px", height: "16px" }}*/}
                    <ListItemText primary="Delete Post"/>
                </ListItem>
                <ListItem button onClick={() => setSelectedMenu('CONTRACTEE')}> {/*className={selectedMenu === 'CONTRACTEE' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}*/}
                    <ListItemIcon><FontAwesomeIcon icon={faPersonBooth} /></ListItemIcon>{/*style={{ width: "16px", height: "16px" }}*/}
                    <ListItemText primary="Available Contractee"/>
                </ListItem>
            </List>
        }
        {userStatus === 'Contractee' && 
            <List>
                <ListItem button onClick={() => setSelectedMenu('AVAILABLEJOBS')}> {/*className={selectedMenu === 'AVAILABLEJOBS' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}*/}
                   <ListItemIcon><FontAwesomeIcon icon={faTasks} /></ListItemIcon>{/*style={{ width: "16px", height: "16px" }}*/}
                   <ListItemText primary="Available Jobs"/>
                </ListItem>
            </List>
        }
        {userStatus === 'NEWUSER' && 
            <List>
                <ListItem button onClick={() => setSelectedMenu('REGISTRATION')}> {/*className={selectedMenu === 'REGISTRATION' ? 'nav-link text-dark bg-warning' : 'nav-link text-dark'}*/}
                   <ListItemIcon><FontAwesomeIcon icon={faRegistered} /></ListItemIcon>{/*style={{ width: "16px", height: "16px" }}*/}
                   <ListItemText primary="Registration"/>
                </ListItem>
            </List>
        }
        <Divider/>
        <List>
            <ListItem button onClick={signOut}> {/*className="nav-link text-dark "*/}
                <ListItemIcon><FontAwesomeIcon icon={faSignOutAlt} /></ListItemIcon>{/*style={{ width: "16px", height: "16px" }}*/}
                <ListItemText primary="SignOut"/>
            </ListItem>
        </List>
        </Drawer>
        <main className={classes.main}>
            {selectedMenu === 'POSTJOB' && "call <PostJob/>"}
            {selectedMenu === 'DELETEPOST' && "call <PostDelete />"}
            {selectedMenu === 'REGISTRATION' && "call <NewUserRegistration />"}
            {selectedMenu === 'CONTRACTEE' && "call <ContracteeList userField={userField} userStatus={userStatus} />"}
            {selectedMenu === 'AVAILABLEJOBS' && "call <AvailableJobs userField={userField} />"}
        </main>
        </div>
    </div>
  );
}

export default DashBoard;
