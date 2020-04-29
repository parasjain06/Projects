import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box} from '@material-ui/core';

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';

import avatar from "../avatar.png"
import {makeStyles } from "@material-ui/styles"
import MobilRightMenusSlider from "@material-ui/core/Drawer"
const useStyles=makeStyles(theme =>({
    menuSliderContainer:{
        width:400,
        background : "#511",
        height : "100%"
        
    },
    avatar : {
        display : "block",
        margin : "0.5rem auto",
        height : "100px",
        width : "100px"
       // width : theme.spacing(13),
       // height : theme.spacing(13)
    },

    listItem:{
        color:"tan"
    }
}))



const menuItems= [
    {
        listIcon : <Home/>,
        listText : "Home"
    },
    {
        listIcon : <AssignmentInd/>,
        listText : "Resume"
    },
    {
        listIcon : <Apps/>,
        listText : "Portfolio"
    },
    {
        listIcon : <ContactMail/>,
        listText : "Contacts"
    }
]

const Navbar = () => {
    const [state,setState] = useState({
        right : false
    })
    const toggleSlider = (slider,open) => () =>
    {
        setState({
            ...state,[slider]: open    

        });
    }
    const classes = useStyles();

    const sideList = slider=>(
        
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className ={classes.avatar} src={avatar} alt= "Russel Crown"></Avatar>
            <Divider/>
            <List>
                {menuItems.map((lsItem,key)=>(
     
                <ListItem button key={key}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    <ListItemText className={classes.listItem} primary = {lsItem.listText}/>
                    </ListItemIcon>
                </ListItem>
                ))}
               
            </List>
        </Box>
    )

    return (
        <>
        <Box component= "nav">
            <AppBar position="static" style={{background: "#222"}}>

                <Toolbar>
                    <IconButton onClick = {toggleSlider("right",true)} >
                    <ArrowBack style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color :"tan"}}>
                        Portfolio
                    </Typography>
                    <MobilRightMenusSlider
                    onClose={toggleSlider("right",false)}
                    anchor = "right"
                    open = {state.right}>
                     {sideList("right")}
                    </MobilRightMenusSlider>
                    
                </Toolbar>
            </AppBar>


        </Box>
        </>
    )
}

export default Navbar
