import React from "react";
import { Box, Button, Tooltip, useMediaQuery } from "@mui/material";
import { DownloadOutlined } from "@ant-design/icons";

const Resume = () => {
  const mobileView = useMediaQuery("(max-width: 900px)");

  // Styles Object
  const styles = {
    resumeContainer: {
      minHeight: "100vh",
      padding: 4,
      textAlign: "center",
      paddingTop: "5rem",
      backgroundColor: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(90deg, #003366 10%, #000000 30%, rgb(15, 15, 15) 50%, #000000 70%, #003366 90%)",
    },
    imageContainer: {
      maxWidth: mobileView ? "90%" : "60%",
      marginBottom: mobileView ? "" : 2,
      position: "relative",
      display: "flex",
    },
    downloadButton: {
      position: "absolute",
      right: "20px",
      top: "20px",
      minWidth: "fit-content",
      maxWidth: "fit-content",
      padding: "0.25rem",
    },
    downloadIcon: {
      fontSize: "18px",
    },
    resumeImage: {
      width: "100%",
      maxWidth: "100%",
      height: "auto",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <Box sx={styles.resumeContainer}>
      {/* Displaying the resume image */}
      <Box sx={styles.imageContainer}>
        {/* Button to download the resume PDF */}
        <Tooltip title="Download Resume">
          <Button
            variant="contained"
            color="primary"
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download="Brayden_Burden_Resume.pdf"
            sx={styles.downloadButton}
          >
            <DownloadOutlined style={styles.downloadIcon} />
          </Button>
        </Tooltip>
        <img
          src={`${process.env.PUBLIC_URL}/resume_image.jpg`}
          alt="Brayden Doe's Resume"
          style={styles.resumeImage}
        />
      </Box>
    </Box>
  );
};

export default Resume;
