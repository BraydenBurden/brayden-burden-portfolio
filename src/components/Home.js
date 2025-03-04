import React, { useEffect, useRef } from "react";
import {
  Typography,
  Button,
  Stack,
  Grid2,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import background from "../assets/background2.mp4";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65; // Set to half speed (0.5x)
    }
  }, []);

  const mobileView = useMediaQuery("(max-width: 900px)");

  const styles = {
    homeContainer: {
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      paddingTop: "10rem",
      height: mobileView ? "100%" : "100vh",
      paddingLeft: mobileView ? "2rem" : "10rem",
      paddingRight: mobileView ? "2rem" : "10rem",
    },
    contentContainer: {
      maxWidth: mobileView ? "100%" : "65%",
      minWidth: mobileView ? "100%" : "65%",
      zIndex: 10,
    },
    buttonContainer: {
      maxWidth: "80%",
      minWidth: "80%",
      flexDirection: "row",
      gap: "1rem",
      marginTop: "1rem",
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures video covers the container
      zIndex: -1, // Make sure content is on top of the video
    },
    title: {
      color: "#fff",
      marginBottom: "1rem",
      fontFamily: '"Oleo Script", cursive',
    },
    subtitle: {
      color: "lightgray",
      fontFamily: "'Lato', sans-serif",
      marginBottom: "1rem",
    },
    description: {
      color: "lightgray",
      fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
    },
    blueBox: {
      // backgroundColor: "#007FFF",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: "50%",
      background:
        "linear-gradient(to right, rgba(0, 127, 255, 0) 0%, #003366 90%)",
    },
  };

  return (
    <Grid2 id="home" size={12} sx={styles.homeContainer}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Stack sx={styles.contentContainer}>
        <Typography variant="h2" sx={styles.title}>
          Hey, I'm Brayden
        </Typography>
        <Typography variant="h5" sx={styles.subtitle}>
          Full-Stack Developer | Creative Problem Solver | Innovator
        </Typography>
        <Typography variant="h6" sx={styles.description}>
          I build seamless digital experiences, solve complex problems, and turn
          ideas into reality—one line of code at a time.
        </Typography>
      </Stack>

      <Stack sx={styles.buttonContainer}>
        <Tooltip title="Learn More About Brayden">
          <Button
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            variant="contained"
            sx={styles.buttonPrimary}
          >
            Learn More
          </Button>
        </Tooltip>
        <Tooltip title="Contact Brayden">
          <Button
            variant="outlined"
            sx={styles.buttonSecondary}
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </Tooltip>
      </Stack>

      <Stack sx={styles.blueBox}></Stack>
    </Grid2>
  );
};

// Inline Styles

export default Home;
