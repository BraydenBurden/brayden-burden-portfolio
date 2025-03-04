import React, { useState } from "react";
import { Modal } from "antd";
import {
  Box,
  Button,
  Link,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ImageCarousel from "./ImageCarousel";
import { ExportOutlined } from "@ant-design/icons";

const WorkDisplay = ({
  workImages,
  workDesc,
  detailedDesc,
  header,
  images,
  infoLink,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const mobileView = useMediaQuery("(max-width: 500px)");

  const styles = {
    workContainer: {
      backgroundColor: "rgb(20,20,20)",
      padding: "1.5rem",
      height: "fit-content",
      borderRadius: "10px",
      boxShadow: "0px 1px 10px rgba(100, 100, 100, 0.2)",
      cursor: header !== "" ? "pointer" : "",
    },
    imageStack: {
      backgroundBlendMode: "overlay",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: mobileView ? "100%" : "20rem",
      height: "25rem",
    },
    headerStack: {
      color: "#fff",
      padding: "0.5rem",
      height: "100%",
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.0) 0%, rgba(20,20,20,1) 75%)",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    headerText: {
      fontFamily: '"Oleo Script", cursive',
    },
    descriptionStack: {
      color: "#fff",
      padding: "0.5rem",
      height: "100%",
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(20,20,20,1) 75%)",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    descriptionText: {
      fontSize: "0.9rem",
      textAlign: "center",
      fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
    },
    modalTitle: {
      color: "#fff",
      fontFamily: '"Oleo Script", cursive',
    },
    modalStyles: {
      content: { backgroundColor: "rgb(15,15,15)" },
      header: { backgroundColor: "rgb(15,15,15)" },
    },
    modalText: {
      color: "#fff",
      fontSize: "0.9rem",
    },
    buttonContainer: {
      flexDirection: "row",
      gap: "1rem",
      width: "100%",
      marginTop: "1rem",
      justifyContent: "flex-end",
    },
    linkStyle: {
      textAlign: "center",
    },
    infoButton: {
      width: "fit-content",
      display: "relative",
    },
    buttonText: {
      marginRight: "0.5rem",
    },
    exportIcon: {
      position: "absolute",
      top: 5,
      right: 5,
    },
    closeButton: {
      width: "fit-content",
    },
  };

  return (
    <>
      <Tooltip
        title={header !== "" ? `Click for more info about ${header}` : ""}
      >
        <Box sx={styles.workContainer}>
          <Stack
            onClick={
              header !== "" ? showModal : () => console.log("Coming Soon")
            }
            sx={{
              ...styles.imageStack,
              backgroundImage: `linear-gradient(135deg, #003366 10%, #000000 30%, rgb(15, 15, 15) 50%, #000000 70%, #003366 90%), url(${workImages})`,
            }}
          >
            <Stack sx={styles.headerStack}>
              <Typography sx={styles.headerText} variant="h4">
                {header}
              </Typography>
            </Stack>
            <Stack sx={styles.descriptionStack}>
              <Typography sx={styles.descriptionText} variant="p">
                {workDesc}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Tooltip>
      <Modal
        title={
          <Typography variant="h5" sx={styles.modalTitle}>
            {header}
          </Typography>
        }
        width="900px"
        open={isModalVisible}
        onCancel={handleCancel}
        styles={styles.modalStyles}
        footer={false}
      >
        <Stack>
          <ImageCarousel images={images} />
          {detailedDesc.length > 1 ? (
            detailedDesc.map((paragraph, index) => (
              <Typography
                key={index}
                sx={{
                  ...styles.modalText,
                  marginBottom:
                    index === detailedDesc.length - 1 ? "0" : "1rem",
                }}
              >
                {paragraph}
              </Typography>
            ))
          ) : (
            <Typography sx={styles.modalText}>{detailedDesc}</Typography>
          )}
          <Stack sx={styles.buttonContainer}>
            <Link
              href={infoLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.linkStyle}
            >
              <Tooltip
                title={
                  infoLink !== ""
                    ? `Go to ${infoLink} to learn more about ${header}`
                    : ""
                }
              >
                <Button variant="contained" sx={styles.infoButton}>
                  <Typography sx={styles.buttonText}>{header} info</Typography>
                  <ExportOutlined style={styles.exportIcon} />
                </Button>
              </Tooltip>
            </Link>
            <Button
              variant="outlined"
              sx={styles.closeButton}
              onClick={handleCancel}
            >
              Close
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};

export default WorkDisplay;
