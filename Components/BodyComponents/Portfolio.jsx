import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commomComponent"
import { useStyles } from "../BodyComponents/BodyStyles"


import image1 from "../../images/B-1.png";
import image2 from "../../images/B-2.png"; 
import image3 from "../../images/B-3.jpeg";
import image4 from "../../images/F-4.jpeg";
import image5 from "../../images/B-5.jpeg";
import image6 from "../../images/B-6.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();


  const portfolioData = [
    { url: image1, title: "# Project 1 ", link: "https://github.com/S123tuti/Url-shorten/tree/project/urlShortnerGroup59" },
    { url: image2, title: "# Project 2 ", link: "https://github.com/S123tuti/E-commerce-Shopping-cart/tree/Project-5---Products-ManagementGroup45" }, 
    { url: image3, title: "# Project 3 ", link: "https://github.com/S123tuti/Blog-applications/tree/master" },
    { url: image4, title: "# Project 4 ", link: "https://github.com/S123tuti/TextUtils" },
    { url: image5, title: "# Project 5 ", link: "https://github.com/S123tuti/event-app/tree/master" },
    { url: image6, title: "# Project 6 ", link: "https://github.com/S123tuti/Book-management-frontend/tree/master" },
  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "Let's See My Work",
              alignCenter: true,
            })}
          </Grid>
        </Grid>

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}style={{display:"flex"}}>
                  <img style={{width:"20 rem",  height:" 20rem", margin:"1 rem"
                  }}
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>

             <a href={item.link} target="_blank"  rel="noopener"><Button variant='contained' >Visit</Button></a>  
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}