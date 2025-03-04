import React from "react";
import myImage from "../assets/brayden-burden.jpg";
import {
  Typography,
  Stack,
  Grid2,
  Box,
  useMediaQuery,
  Tooltip,
} from "@mui/material";

const About = () => {
  const skills = [
    "React.js",
    "Node.js",
    "JavaScript",
    "Python",
    "SQL",
    "MongoDB",
    "NoSQL",
    "Express",
    "REST APIs",
    "Material UI",
    "Amazon Web Services",
    "NPM (Node Package Manager)",
    "RevenueCat API",
    "OpenAi API",
    "CI/CD",
    "API Integration",
    "Version Control (Git)",
    "Leadership",
    "Critical Thinker",
    "Creative Thinker",
    "Adaptability",
    "Troubleshooting",
    "Team Player",
    "Independent Worker",
  ];

  const mobileView = useMediaQuery("(max-width: 1220px)");
  const smallMobile = useMediaQuery("(max-width: 600px)");

  const skillSplitNum = mobileView ? 12 : 6;

  const styles = {
    aboutContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      height: mobileView ? "fit-content" : "100vh",
      paddingLeft: mobileView ? "2rem" : "10rem",
      paddingRight: mobileView ? "2rem" : "10rem",
      paddingTop: "5rem",
      paddingBottom: "5rem",
      background:
        "linear-gradient(45deg, #003366 10%, #000000 40%, rgb(15, 15, 15) 80%)",
    },
    contentContainer: {
      width: mobileView ? "100%" : "50%",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    skillContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      alignSelf: mobileView ? "center" : "flex-end",
      width: mobileView ? "100%" : "70%",
      alignItems: mobileView ? "center" : "",
      marginTop: mobileView ? "2rem" : "",
    },
    underline: {
      width: mobileView ? "100%" : "",
      height: "0.35rem",
      backgroundColor: "#007FFF",
      // marginTop: "0.5rem",
      // marginBottom: "0.5rem",
    },
    skillList: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    topSection: {
      flexDirection: mobileView ? "column" : "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: mobileView && "center",
      // backgroundColor: "red",
    },
    image: {
      width: "20rem",
      height: "auto",
      // borderRadius: "25px",
    },
    skillsUnderline: {
      width: mobileView ? "100%" : "30rem",
    },
    title: {
      fontFamily: '"Oleo Script", cursive',
      color: "#fff",
    },
    paragraph: {
      color: "#fff",
      fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
    },
    skillItem: {
      color: "#fff",
      fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
    },
    imageContainer: {
      // padding: "0.25rem",
      // borderRadius: "25px",
      backgroundColor: "#007FFF",
      boxShadow: "0 0 20px 10px rgba(0, 127, 255, 0.5)", // Large spread on all sides
      marginTop: mobileView ? "2rem" : "0",
    },
  };

  return (
    <Grid2 id="about" size={12} sx={styles.aboutContainer}>
      <Stack sx={styles.topSection}>
        <Stack sx={styles.contentContainer}>
          <Typography variant="h3" sx={styles.title}>
            About Me
          </Typography>
          <Box sx={{ ...styles.underline, width: "15rem" }} />
          <Typography variant="body1" sx={styles.paragraph}>
            Hey! I'm Brayden, a passionate Full-Stack Developer with a love for
            solving problems and creating intuitive digital experiences. I
            thrive on challenges, constantly pushing myself to learn and refine
            my craft. From front-end interfaces to back-end logic, I bring ideas
            to life with clean and scalable code.
          </Typography>
          <Typography variant="body1" sx={styles.paragraph}>
            With experience in modern frameworks, cloud solutions, and API
            development, I strive to build efficient, user-focused applications.
            Whether it's web, mobile, or automation, I’m always up for an
            exciting project!
          </Typography>
        </Stack>
        <Stack sx={styles.imageContainer}>
          <Tooltip title="Brayden Burden">
            <Box
              component="img"
              src={myImage}
              alt="Description"
              sx={styles.image}
            />
          </Tooltip>
        </Stack>
      </Stack>

      <Stack sx={styles.skillContainer}>
        <Typography variant="h3" sx={[styles.title, styles.skillsTitle]}>
          Skills & Technologies
        </Typography>
        <Box sx={[styles.underline, styles.skillsUnderline]} />
        {!smallMobile ? (
          <Stack sx={styles.skillList}>
            {Array.from(
              { length: Math.ceil(skills.length / skillSplitNum) },
              (_, colIndex) => (
                <Stack
                  key={colIndex}
                  component="ul"
                  sx={{ listStyle: "none", padding: 0 }}
                >
                  {skills
                    .slice(
                      colIndex * skillSplitNum,
                      colIndex * skillSplitNum + skillSplitNum
                    )
                    .map((skill, index) => (
                      <Typography
                        key={index}
                        component="li"
                        sx={styles.skillItem}
                      >
                        {skill}
                      </Typography>
                    ))}
                </Stack>
              )
            )}
          </Stack>
        ) : (
          <Stack sx={styles.skillList}>
            <Stack component="ul" sx={{ listStyle: "none", padding: 0 }}>
              {skills.map((skill, index) => (
                <Typography key={index} component="li" sx={styles.skillItem}>
                  {skill}
                </Typography>
              ))}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Grid2>
  );
};

// Styles Object

export default About;
