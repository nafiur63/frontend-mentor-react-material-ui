import {makeStyles} from "@material-ui/core/styles"
import HeaderBack from './images/image-header.jpg'
import MobHeaderBack from './images/mob-image-header.jpg'
import EggDeskBack from './images/eggdesk.jpg'
import EggMobBack from './images/eggmobile.jpg'
import StickDeskBack from './images/stickdesk.jpg'
import StickMobBack from './images/stickmobile.jpg'
import CherryDeskBack from './images/cherrydesk.jpg'
import CherryMobBack from './images/cherrymobile.jpg'
import OrangeDeskBack from './images/parsimondesk.jpg'
import OrangeMobBack from './images/parsimonmobile.jpg'




export default makeStyles(theme => ({
    header: {
        // backgroundImage: url("image-header.jpg"),
        
        backgroundImage: `url(${MobHeaderBack})`,
        backgroundRepeat:"no-repeat",
        // backgroundSize: "cover",
        // backgroundSize: "100% 100%",
        backgroundSize: "100% 100%",

        [theme.breakpoints.up("sm")]: {
        backgroundImage: `url(${HeaderBack})`,
        backgroundRepeat:"no-repeat",
        // backgroundSize: "cover",
        // backgroundSize: "100% 100%",
        backgroundSize: "100% 100%",

        }
    },

    creativeHeader: {
        
        margin:"9rem 0 0 0"
    },

    arrowIcon:{
        position:"absolute",
        top:"60%",
        left:"45%",
        [theme.breakpoints.up('md')]: {
        position:"absolute",
        top:"45%",
        left:"48%",
        }
    },

    doubleBox:{
        height:"100vh",
        [theme.breakpoints.up('md')]: {
            height:"80vh",
            }
    },
    
    // MuiTypographybody1:{
    //     fontFamily: "Big Shoulders Stencil Display, cursive",
    // },

    // body1: {
        // "& .MuiBottomNavigationAction-root": {
        //     minWidth: 0,
        //     maxWidth: 250
        // },
        // "& .MuiSvgIcon-root": {
        //     fill:"white",
        //     "&:hover": {
        //         fill:"tomato",
        //         fontSize:"2rem"
        //     }
        // }
    //     " .MuiTypography-body1":{
    //         fontFamily: "Big Shoulders Stencil Display, cursive",
    //         fontSize:"40px",
    //     },

    // },

    navbar: {
        // [theme.breakpoints.up("sm")]: {
        //     display:"none"
        //     }
    },
      item2: {
        order: "1",
        backgroundImage: `url(${EggMobBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        [theme.breakpoints.up('md')]: {
          order:"2",
            
          backgroundImage: `url(${EggDeskBack})`,
          backgroundRepeat:"no-repeat",
          backgroundSize: "cover",
        },
      },
      item1: {
        order: "2",
        
        [theme.breakpoints.up('md')]: {
          order:"1",
        },
      },
    //   EggBackground:{
    //     backgroundImage: `url(${EggMobBack})`,
    //     backgroundRepeat:"no-repeat",
    //     backgroundSize: "cover",

    //     [theme.breakpoints.up("md")]: {
    //     backgroundImage: `url(${EggDeskBack})`,
    //     backgroundRepeat:"no-repeat",
    //     backgroundSize: "cover",
    //     }
    //   },
      textBox:{
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
      },
      stickBackground:{
        backgroundImage: `url(${StickMobBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",

        [theme.breakpoints.up("md")]: {
        backgroundImage: `url(${StickDeskBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        }
      },
      cherryBackground:{
        position:"relative",
        backgroundImage: `url(${CherryMobBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        height:"100%",

        [theme.breakpoints.up("md")]: {
        backgroundImage: `url(${CherryDeskBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        height:"100%",
        }
      },
      orangeBackground:{
        position:"relative",
        backgroundImage: `url(${OrangeMobBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "100% 100%",
        // height:"500px",
        height:"100%",

        [theme.breakpoints.up("md")]: {
        backgroundImage: `url(${OrangeDeskBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        height:"100%",
        
        }
      },
      photoBanner:{
        position:"absolute",
        bottom:"20px",
      },
}))