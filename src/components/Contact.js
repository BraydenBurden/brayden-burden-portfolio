import React, { useState } from "react";
import {
  Typography,
  Button,
  Stack,
  Grid2,
  Link,
  Box,
  OutlinedInput,
  useMediaQuery,
  Alert,
  Tooltip,
} from "@mui/material";
import {
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactModal, setContactModal] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const mobileView = useMediaQuery("(max-width: 900px)");

  const styles = {
    contactContainer: {
      position: "relative",
      minHeight: "100vh",
      height: mobileView ? "100%" : "100vh",
      display: "flex",
      flexDirection: mobileView ? "column" : "row",
      alignItems: "center",
      paddingLeft: mobileView ? "2rem" : "10rem",
      paddingRight: mobileView ? "2rem" : "10rem",
      justifyContent: mobileView ? "space-evenly" : "space-between",
      background:
        "linear-gradient(135deg, #003366 10%, #000000 40%, rgb(15, 15, 15) 80%)",
    },
    textContent: {
      width: mobileView ? "100%" : "52%",
      height: mobileView ? "fit-content" : "40%",
    },
    socialsContent: {
      width: mobileView ? "100%" : "40%",
      height: mobileView ? "fit-content" : "40%",
    },
    underline: {
      // width: "15rem",
      height: "0.35rem",
      backgroundColor: "#007FFF",
      // marginTop: "0.5rem",
      // marginBottom: "0.5rem",
    },
    paragraph: {
      marginTop: "1rem",
    },
    text: {
      color: "#fff",
      fontSize: "1.25rem",
      fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
    },
    contactButton: {
      width: "fit-content",
      marginTop: "1rem",
    },
    title: {
      color: "#fff",
      fontFamily: '"Oleo Script", cursive',
    },
    link: {
      color: "#fff",
      display: "flex",
      gap: "0.5rem",
      width: "fit-content",
    },
    linkContainer: {
      marginTop: "1rem",
    },
    modalInputs: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgb(30,30,30)", // Border color
        },
        "& input": {
          color: "rgb(30,30,30)", // Text color
        },
      },
    },
    errorMessage: {
      color: "#D32F2F",
    },
  };

  const sendEmail = () => {
    const templateParams = {
      name,
      email,
      reason,
    };

    emailjs
      .send(
        "service_uaqha1s", // Replace with your EmailJS Service ID
        "template_j0uvhzj", // Replace with your EmailJS Template ID
        templateParams,
        "cTl0w_mk1DkqWELAA" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);

          setTimeout(() => {
            // Show success message after email is sent
            setEmailSent(true);
            setContactModal(false);
            setName("");
            setEmail("");
            setReason("");

            // Optionally hide the success message after a few seconds
            setTimeout(() => setEmailSent(false), 3000);
          }, 1000);
        },
        (error) => {
          console.error("Error sending email:", error);
          setErrorMessage("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <>
      <Grid2 id="contact" size={12} sx={styles.contactContainer}>
        {/* Title Section */}
        <Stack sx={styles.textContent}>
          <Typography variant="h3" sx={styles.title}>
            Contact Me
          </Typography>
          <Box style={{ ...styles.underline, width: "17rem" }} />
          <Stack>
            <Typography variant="body1" sx={[styles.text, styles.paragraph]}>
              I'm here to help! If you have any questions or a project in mind,
              feel free to reach out. I’m always happy to discuss new
              opportunities and assist where I can. Don’t hesitate to get in
              touch!
            </Typography>
            {/* Button */}
            <Tooltip title="Contact Brayden">
              <Button
                sx={styles.contactButton}
                variant="contained"
                onClick={() => setContactModal(true)}
              >
                Contact Now
              </Button>
            </Tooltip>
          </Stack>
        </Stack>

        {/* Socials Section */}
        <Stack sx={styles.socialsContent}>
          <Typography variant="h3" sx={styles.title}>
            Socials
          </Typography>
          <div style={{ ...styles.underline, width: "11rem" }} />
          <Stack sx={styles.linkContainer}>
            <Tooltip title="Brayden's Email">
              <Typography variant="body1" sx={styles.text}>
                <Link href="mailto:brayden@example.com" sx={styles.link}>
                  <MailOutlined style={{ color: "#007FFF" }} />
                  brayden.burden00@gmail.com
                </Link>
              </Typography>
            </Tooltip>
            <Tooltip title="Brayden's Phone Number">
              <Typography variant="body1" sx={styles.text}>
                <Link href="tel:+1234567890" sx={styles.link}>
                  <PhoneOutlined style={{ color: "#007FFF" }} />
                  +1 (709) 454-5027
                </Link>
              </Typography>
            </Tooltip>
            <Tooltip title="Brayden's LinkedIn">
              <Typography variant="body1" sx={styles.text}>
                <Link
                  href="https://www.linkedin.com/in/brayden-burden-ab2778223/"
                  target="_blank"
                  sx={styles.link}
                >
                  <LinkedinOutlined style={{ color: "#007FFF" }} />
                  LinkedIn
                </Link>
              </Typography>
            </Tooltip>
            <Tooltip title="Brayden's Facebook">
              <Typography variant="body1" sx={styles.text}>
                <Link
                  href="https://www.facebook.com/brayden.burden/"
                  target="_blank"
                  sx={styles.link}
                >
                  <FacebookOutlined style={{ color: "#007FFF" }} />
                  Facebook
                </Link>
              </Typography>
            </Tooltip>
          </Stack>
        </Stack>
        {emailSent && (
          <Alert
            severity="success"
            sx={{
              position: "fixed", // Fixed position instead of absolute
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "fit-content",
              p: 2, // Padding for better appearance
              zIndex: 9999, // Ensure it appears above other content
            }}
          >
            Your email has been sent successfully! Brayden will get back to you
            as soon as possible!
          </Alert>
        )}
      </Grid2>
      <Modal
        destroyOnClose
        title={
          <Typography variant="h5" sx={{ color: "#fff" }}>
            Contact
          </Typography>
        }
        onCancel={() => setContactModal(false)}
        open={contactModal}
        width="700px"
        footer={false}
        styles={{
          content: { backgroundColor: "rgb(15,15,15)" },
          header: {
            backgroundColor: "rgb(15,15,15)",
            fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
          },
        }}
        // style={{ backgroundColor: "rgb(15,15,15)" }}
        headerStyle={{ backgroundColor: "#007FFF" }}
      >
        <Stack spacing={2}>
          <OutlinedInput
            value={name}
            fullWidth
            sx={{
              backgroundColor: "rgb(30, 30, 30)",
              color: "white",
              borderRadius: 1,
              "&::placeholder": {
                color: "rgb(60, 60, 60)", // Slightly lighter than the background
              },
              fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
            }}
            placeholder="What's your name?"
            onChange={(e) => {
              setName(e.target.value);
              errorMessage !== "" && setErrorMessage("");
            }}
          />

          <OutlinedInput
            value={email}
            type="email"
            fullWidth
            sx={{
              backgroundColor: "rgb(30, 30, 30)",
              color: "white",
              borderRadius: 1,
              "&::placeholder": {
                color: "rgb(60, 60, 60)", // Slightly lighter than the background
              },
              fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
            }}
            placeholder="What's your email?"
            onChange={(e) => {
              setEmail(e.target.value);
              errorMessage !== "" && setErrorMessage("");
            }}
          />

          <OutlinedInput
            value={reason}
            multiline
            fullWidth
            rows={5}
            sx={{
              backgroundColor: "rgb(30, 30, 30)",
              color: "white",
              borderRadius: 1,
              "&::placeholder": {
                color: "rgb(60, 60, 60)", // Slightly lighter than the background
              },
              fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
            }}
            placeholder="What's the reason for contacting?"
            onChange={(e) => {
              setReason(e.target.value);
              errorMessage !== "" && setErrorMessage("");
            }}
          />

          {errorMessage !== "" && (
            <Typography variant="body1" sx={styles.errorMessage}>
              {errorMessage}
            </Typography>
          )}

          <Button
            sx={styles.submitButton}
            variant="contained"
            onClick={sendEmail}
          >
            Reach Out
          </Button>
        </Stack>
      </Modal>
    </>
  );
};

export default Contact;
