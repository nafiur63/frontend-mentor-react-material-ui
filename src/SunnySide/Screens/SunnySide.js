import { AppBar, Box, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import logo from "../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/logo.svg";
import headerImage from "../images/desktop/image-header.jpg";
// import './styles.css'

import downIcon from './icon-arrow-down.svg'
import useStyles from "./Styles";

const SunnySide = () => {
  const styles = useStyles();
  return (
    <Box height="100vh">
      <Box className={styles.header} height="100vh">
        <AppBar
          className={styles.navbar}
          position="relative"
          color="transparent"
          style={{ boxShadow: "none" }}
        >
          Aula Jhaula Maula Pagla Goru Murgi
        </AppBar>
        <Typography variant="h2" style={{fontFamily:"Fraunces", fontWeight:"900",color:"#ffff"}}>
            We are creatives
        </Typography>
        <img src={downIcon} className={styles.arrowIcon}></img>
      </Box>
      <Box display="flex" height="80vh">
        <Grid container>
          <Grid className={styles.item1} item sm={6} xs={12}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              height="100%"
            >
              <Box>
                <Typography variant="h4">Transform your brand</Typography>
                <Typography>
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
    </Box>
  );
};

export default SunnySide;
