import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "../BodyComponents/BodyStyles";
import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commomComponent";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: " Web Developer",
      description: "A Web Developer is a professional who is responsible for the design and construction of websites.",
      icon: <DashboardIcon />,
    },
    {
      title: "Backend Developer",
      description: "Backend developer responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system.",
      icon: <ToysIcon />,
    },
    {
      title: "MERN Stack Developer",
      description: "someone who can work on both the back-end and front-end of systems.",
      icon: <PermDeviceInformationIcon />,
    },
  ];
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "Hello I'm Stuti Sharma",
                description:
                  "I'm from Lucknow, Uttar Pradesh. I completed my Graduation in B.Sc. from the University of Lucknow.My Expertise includes Html, css, Javascript, Nodejs, Mongodb, Redis, Postman, Express, RESTful APIs, Git, AWS S3, Data Structure & Algorithms, Reactjs, MYSQL.Using these technical skills I completed my industry based projects like E-commerce website, URL shortner, Book Management, Open to Intern, Blogging site, Photo Gallery application, Event booking app..!!",
              })}
              <br />
              
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}