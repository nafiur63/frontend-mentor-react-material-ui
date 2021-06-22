import {makeStyles} from "@material-ui/core/styles"
import HeaderBack from './image-header.jpg'
import MobHeaderBack from './mob-image-header.jpg'
import EggDeskBack from './eggdesk.jpg'
import EggMobBack from './eggmobile.jpg'


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


    arrowIcon:{
        position:"absolute",
        top:"60%",
        left:"45%",
        [theme.breakpoints.up('sm')]: {
        position:"absolute",
        top:"45%",
        left:"48%",
        }
    },

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
        [theme.breakpoints.up('sm')]: {
          order:"2",
            
          backgroundImage: `url(${EggDeskBack})`,
          backgroundRepeat:"no-repeat",
          backgroundSize: "cover",
        },
      },
      item1: {
        order: "2",
        
        [theme.breakpoints.up('sm')]: {
          order:"1",
        },
      },
      EggBackground:{
        backgroundImage: `url(${EggMobBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",

        [theme.breakpoints.up("sm")]: {
        backgroundImage: `url(${EggDeskBack})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        }
      },
      textBox:{
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
      }
}))