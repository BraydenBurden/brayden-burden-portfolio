import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return; // Only add listener when menu is open

    const handleScroll = () => {
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <AppBar position="absolute" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Button
            variant="text"
            sx={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuOutlined style={{ color: "#fff", fontSize: "28px" }} />
          </Button>
        </Toolbar>
      </AppBar>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
            animate={
              menuOpen
                ? { scaleX: 1, scaleY: 1, opacity: 1 }
                : { scaleX: 0, scaleY: 0, opacity: 0 }
            }
            exit={{ scaleX: 0, scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={styles.modal}
          >
            <Link to="/" style={styles.link} onClick={() => setMenuOpen(false)}>
              <Typography sx={styles.text}>Home</Typography>
            </Link>
            <Link
              to="/myWork"
              style={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              <Typography sx={styles.text}>My Work</Typography>
            </Link>
            <Link
              to="/resume"
              style={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              <Typography sx={styles.text}>Resume</Typography>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Styles Object
const styles = {
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "fixed",
    width: "100%",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 20px",
  },
  link: {
    width: "100%",
    color: "#fff",
    textTransform: "none",
    fontSize: "16px",
    margin: "0 10px",
    textDecoration: "none",
  },
  modal: {
    backgroundColor: "rgb(15,15,15)",
    position: "fixed",
    top: "2%",
    right: "1.7%",
    height: "fit-content",
    minHeight: "5rem",
    width: "fit-content",
    zIndex: 20,
    borderRadius: "10px",
    padding: "4rem 1.5rem 1.5rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "flex-end",
    justifyContent: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
    transformOrigin: "top right",
  },
  text: {
    textAlign: "center",
    padding: "0.25rem",
    width: "100%",
    color: "#fff",
    fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
    "&:hover": {
      textDecoration: "underline",
    },
  },
  menuButton: {
    minWidth: "fit-content",
    maxWidth: "fit-content",
  },
};

export default NavBar;
