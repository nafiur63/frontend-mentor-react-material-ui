import { AppBar, Box, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import headerImage from "../images/desktop/image-header.jpg";
// import './styles.css'

import downIcon from "./images/icon-arrow-down.svg";
import useStyles from "./Styles";

const SunnySide = () => {
  const styles = useStyles();
  return (
    <Box >
      {/* first div */}

      <Box className={styles.header} height="100vh" textAlign="center">
        <AppBar
          className={styles.navbar}
          position="relative"
          color="transparent"
          style={{ boxShadow: "none" }}
        >
          hola
          {/* <img style={{}} src={Logo} alt="Sunnyside logo"/>  */}
        </AppBar>
        <Typography
          textAlign="center"
          className={styles.creativeHeader}
          variant="h2"
          style={{ fontFamily: "Fraunces", fontWeight: "900", color: "#ffff" }}
        >
          We are creatives
        </Typography>
        <img src={downIcon} className={styles.arrowIcon}></img>
      </Box>

      {/* second div  */}

      <Box display="flex" className={styles.doubleBox}>
        <Grid container>
          <Grid className={styles.item1} item md={6} xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              height="100%"
            >
              <Box>
                <Typography
                  variant="h4"
                  style={{ fontFamily: "Fraunces", fontWeight: "900" }}
                  gutterBottom
                >
                  Transform your brand
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontFamily: "Barlow" }}
                  gutterBottom
                >
                  We are a full-service creative agency specializing in helping
                  brands grow fast. Engage your clients through compelling
                  visuals that do most of the marketing for you.
                </Typography>
                <Link>Learn more</Link>
              </Box>
            </Box>
          </Grid>
          <Grid className={styles.item2} item sm={6} xs={12}>
            <Box className={styles.EggBackground}></Box>
          </Grid>
        </Grid>
      </Box>

      {/* thid div  */}

      <Box display="flex" className={styles.doubleBox}>
        <Grid container>
          <Grid className={styles.stickBackground} item md={6} xs={12}></Grid>
          <Grid item md={6} xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              height="100%"
            >
              <Box>
                <Typography
                  variant="h4"
                  style={{ fontFamily: "Fraunces", fontWeight: "900" }}
                  gutterBottom
                >
                  Stand out to the right audience
                </Typography>
                <Typography style={{ fontFamily: "Barlow" }} gutterBottom>
                  Using a collaborative formula of designers, researchers,
                  photographers, videographers, and copywriters, we’ll build and
                  extend your brand in digital places.
                </Typography>
                <Link>Learn more</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* fourth div  */}

      <Box display="flex" className={styles.doubleBox}>
        <Grid container style={{height:"100%"}}>
          <Grid  item md={6} xs={12}>
            <Box className={styles.cherryBackground}>
            <Box className={styles.photoBanner} textAlign="center">
              <Box>
                <Typography
                  variant="h4"
                  style={{ fontFamily: "Fraunces", fontWeight: "900" }}
                  gutterBottom
                >
                  Graphic Design
                </Typography>
                <Typography style={{ fontFamily: "Barlow" }} gutterBottom>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </Typography>
                <Link>Learn more</Link>
              </Box>
            </Box>
            </Box>
            
          </Grid>
          <Grid  item md={6} xs={12}>
              <Box className={styles.orangeBackground}> 
              <Box className={styles.photoBanner} textAlign="center">
              <Typography
                variant="h4"
                style={{ fontFamily: "Fraunces", fontWeight: "900" }}
                gutterBottom
              >
                Graphic Design
              </Typography>
              <Typography style={{ fontFamily: "Barlow" }} gutterBottom>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </Typography>
              <Link>Learn more</Link>
            </Box>
              </Box>
            
          </Grid>
        </Grid>
      </Box>


      {/* <Box display="flex" className={styles.doubleBox}>
        <Grid container>
          <Grid className={styles.cherryBackground} item md={6} xs={12}>
            <Box className={styles.photoBanner} textAlign="center">
              <Box>
                <Typography
                  variant="h4"
                  style={{ fontFamily: "Fraunces", fontWeight: "900" }}
                  gutterBottom
                >
                  Graphic Design
                </Typography>
                <Typography style={{ fontFamily: "Barlow" }} gutterBottom>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </Typography>
                <Link>Learn more</Link>
              </Box>
            </Box>
          </Grid>
          <Grid className={styles.orangeBackground} item md={6} xs={12}>
            <Box className={styles.photoBanner} textAlign="center">
              <Typography
                variant="h4"
                style={{ fontFamily: "Fraunces", fontWeight: "900" }}
                gutterBottom
              >
                Graphic Design
              </Typography>
              <Typography style={{ fontFamily: "Barlow" }} gutterBottom>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </Typography>
              <Link>Learn more</Link>
            </Box>
          </Grid>
        </Grid>
      </Box> */}

      {/* fifth div  */}

      <Box  textAlign="center">
        <Box style={{margin:"200px 0 0 0"}}>
            <Typography variant="h4">Client TestimonialsClient Testimonials</Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default SunnySide;
