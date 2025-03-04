import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { Box, useMediaQuery } from "@mui/material"; // MUI Box component for layout
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ImageCarousel component receives images as a prop
const ImageCarousel = ({ images }) => {
  // Create a reference to the Slider component
  const sliderRef = useRef(null);

  // Set auto-scroll interval time (in milliseconds)
  const AUTO_SCROLL_INTERVAL = 3000; // Change this to your desired time (3 seconds in this case)

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  useEffect(() => {
    // Auto-scroll using setInterval
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext(); // Move to the next slide
    }, AUTO_SCROLL_INTERVAL);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once, after the initial render

  const mobileView = useMediaQuery("(max-width: 500px)");

  const styles = {
    carouselContainer: {
      position: "relative",
      width: "100%",
      height: "auto",
      marginBottom: "1rem",
    },
    image: {
      maxHeight: "15rem",
      width: mobileView ? "100%" : "auto",
      height: mobileView ? "auto" : "15rem",
      margin: "0 auto",
    },
    imageText: {
      color: "#fff",
      textAlign: "center",
      fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
      fontSize: "0.65rem",
    },
  };

  return (
    <Box sx={styles.carouselContainer}>
      {console.log(images, "FNIJWNEIFNI")}
      {/* Slick Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {/* Dynamically render the images passed in as a prop */}
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.image}
              alt={`carousel-image-${index}`}
              style={styles.image}
            />
            <p style={styles.imageText}>
              <em>{image.imageText}</em>
            </p>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
