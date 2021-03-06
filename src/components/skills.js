import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
  background: {
    marginTop: "600px",
    marginBottom: "50px",
  },

  h4: {
    color: "#296792",
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(1),
    },
  },
  p: {
    color: "#181A2B",
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(1),
    },
  },
  card: {
    marginTop: "2rem",
  },
}));

const Skills = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.background} ref={ref}>
          {/* <div style={{ border: '1px solid green', padding: '0 6rem' }}> */}
          <div style={{ padding: "0 1rem", marginTop: "1em" }}>
            <Typography
              color='inherit'
              align='center'
              variant='h4'
              className={classes.h4}
            >
              About Me...
            </Typography>
            <div>
              <Typography
                color='inherit'
                align='left'
                variant='h6'
                className={classes.p}
              >
                <p>
                  Hi, I'm Kevin. I am a full-stack web developer with a vast
                  array of knowledge in many frontend frameworks, databases, and
                  best code practices. My primary focus is JavaScript heavy in
                  the React Library and Vue.js Framework for building user
                  interfaces, web applications, and components. I also like
                  making things in Gatsby, Next.js, Node.js, Express.js, with
                  GraphQL, SQL, and MongoDB.
                </p>
                <p>&nbsp;</p>
                <p>
                  Writing code makes me happy. I crave learning and gravitate
                  towards development because it allows me to constantly learn
                  new things. One of my greatest strengths is my aptitude for
                  figuring things out. I love to overcome obstacles and solve
                  problems. I look forward to the challenges to come...
                </p>
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

export default Skills;
