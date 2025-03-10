import React from "react";
import { Grid2, Link, Stack, Tooltip, Typography } from "@mui/material";
import WorkDisplay from "./WorkDisplay";
import fixdenImage from "../assets/fixden.png";
import comingSoonImage from "../assets/comingSoon.jpg";
import sidekickImage from "../assets/sidekick.png";
import taskifyImage from "../assets/taskify.png";

// fidenImages
import fixdenLanding from "../assets/fixdenImages/fixdenLanding.png";
import fixdenFixxie from "../assets/fixdenImages/fixxie.png";
import fixdenClientJR from "../assets/fixdenImages/fixdenClientJR.png";
import fixdenCreateJR from "../assets/fixdenImages/fixdenCreateJR.png";
import fixdenAvailabilitySelector from "../assets/fixdenImages/fixdenAvailabilitySelector.png";
import fixdenCalendar from "../assets/fixdenImages/fixdenCalendar.png";
import fixdenMarket from "../assets/fixdenImages/fixdenMarket.png";
import fixdenClientView from "../assets/fixdenImages/fixdenClientView.png";
import fixdenEmployeeView from "../assets/fixdenImages/fixdenEmployeeView.png";

// sidekickImages
import sidekickImageExplaining from "../assets/sidekickImages/sidekickImageExplaining.jpg";
import sidekickFileUpload from "../assets/sidekickImages/sidekickFileUpload.jpg";
import sidekickFileRetrieval from "../assets/sidekickImages/sidekickFileRetreival.jpg";
import sidekickPersonalization from "../assets/sidekickImages/sidekickPersonalization.jpg";
import sidekickOrganization from "../assets/sidekickImages/sidekickOrganization.jpg";
import { GithubOutlined } from "@ant-design/icons";

// taskifyImages
import taskifyLanding from "../assets/taskifyImages/taskifyLanding.png";
import taskifyDashboard from "../assets/taskifyImages/taskifyDashboard.png";
import taskifyCreateTask from "../assets/taskifyImages/taskifyCreateTask.png";
import taskifyDetailedTaskView from "../assets/taskifyImages/taskifyDetailedTaskView.png";
import taskifyProfile from "../assets/taskifyImages/taskifyProfile.png";
import taskifyLightMode from "../assets/taskifyImages/taskifyLightMode.png";

const MyWork = () => {
  // Sample list of work data
  const workList = [
    {
      id: 1,
      workImages: fixdenImage, // Replace with actual image URLs
      workDesc:
        "FixDen is a platform that connects users with service providers for home repairs and maintenance. Users submit job requests, and vendors can view and bid on them.",
      header: "FixDen",
      detailedDesc: [
        "As the Lead Developer of FixDen, I handle full-stack development and work closely with a team to build a platform that connects users with contractors for home repairs and projects. I develop key features like the availability selecting system, the Fixxie AI chat, and contribute to nearly every aspect of the website. My expertise spans both front-end technologies like ReactJS and Material UI, and back-end technologies such as Node.js and AWS services.",
        "One of the biggest challenges I faced was transitioning the platform from a single user type to allowing every user to be both a vendor and a client. What was initially planned as a one-week update turned into a 2-3 week push due to issues with the existing architecture, but I was able to overcome this challenge and deliver the required functionality. While I focus primarily on development, I also collaborate with my team and participate in meetings to ensure smooth project execution.",
      ],
      images: [
        { image: fixdenLanding, imageText: "Landing page" },
        { image: fixdenFixxie, imageText: "Fixxie - The custom AI bot" },
        { image: fixdenClientJR, imageText: "Job request page" },
        { image: fixdenCreateJR, imageText: "Create job request form" },
        {
          image: fixdenAvailabilitySelector,
          imageText: "Availaility selector display",
        },
        { image: fixdenCalendar, imageText: "Calendar page" },
        { image: fixdenMarket, imageText: "Market Page" },
        { image: fixdenClientView, imageText: "Vendor's view of clients" },
        { image: fixdenEmployeeView, imageText: "Vendor's view of employees" },
      ],
      infoLink: "https://www.fixden.com",
    },
    {
      id: 2,
      workImages: sidekickImage,
      workDesc:
        "Sidekick AI is a personal assistant that helps with tasks like form filling, event planning, document management, and conversations, making information easily accessible.",
      header: "Sidekick AI",
      detailedDesc: [
        "As the Lead Developer of Sidekick, I'm responsible for full-stack development, working closely with my current employer to turn requirements into reality. I developed every feature of the app, including the main chat section, file storage/uploading system, profile section, and subscriptions. I also configured the app for deployment on both Google Play Console and App Store Connect.",
        "One of the biggest challenges I faced was implementing subscriptions. Initially, I tried building them without the RevenueCat API, but I ran into numerous errors and issues handling user input. The solution was to integrate RevenueCat, which simplified the process and made the system more reliable. Another challenge was the deployment process, as I was new to iOS and Android development. It took a lot of time to learn, configure, and perfect the builds, but I'm proud of overcoming these hurdles.",
      ],
      images: [
        {
          image: sidekickImageExplaining,
          imageText: "Sidekick AI explaining an image",
        },
        { image: sidekickFileUpload, imageText: "Upload file functionality" },
        {
          image: sidekickFileRetrieval,
          imageText: "Sidekick AI retrieving files",
        },
        {
          image: sidekickPersonalization,
          imageText: "Personalization options",
        },
        { image: sidekickOrganization, imageText: "Organization view" },
      ],
      infoLink: "https://www.sidekick-ai.ninja",
    },
    {
      id: 3,
      workImages: taskifyImage,
      workDesc:
        "Taskify is a modern task management app with an intuitive card interface for organizing work. Features include task prioritization, progress tracking, and subtask management.",
      header: "Taskify",
      detailedDesc: [
        "Taskify is a modern task management application with an intuitive interface. It features a clean, card-based layout displaying tasks with priorities, due dates, and progress indicators. The application supports filtering by status and priority levels, helping users focus on what matters most.",
        "The application's standout feature is its subtask management system. Users can break down complex tasks into smaller subtasks and track progress individually. With visual indicators, smooth animations, and an expandable interface showing task details, Taskify provides a powerful yet user-friendly experience.",
      ],
      images: [
        { image: taskifyLanding, imageText: "Taskify landing page" },
        { image: taskifyDashboard, imageText: "Main dashboard view" },
        { image: taskifyCreateTask, imageText: "Task creation interface" },
        { image: taskifyDetailedTaskView, imageText: "Detailed task view" },
        { image: taskifyProfile, imageText: "User profile section" },
        { image: taskifyLightMode, imageText: "Light mode interface" },
      ],
      infoLink: "https://github.com/BraydenBurden/taskify",
    },
    // {
    //   id: 4,
    //   workImages: comingSoonImage,
    //   workDesc: "More Projects are coming soon!",
    //   header: "",
    //   detailedDesc: [],
    //   images: [fixdenImage, comingSoonImage, sidekickImage],
    // },
  ];

  return (
    <Grid2 container spacing={4} sx={styles.gridContainer}>
      <Stack sx={styles.linkContainer}>
        <Tooltip title="Brayden's GitHub">
          <Typography variant="body1" sx={styles.text}>
            <Link
              href="https://github.com/BraydenBurden"
              target="_blank"
              sx={styles.link}
            >
              <GithubOutlined style={styles.icon} /> Check out my github
            </Link>
          </Typography>
        </Tooltip>
      </Stack>
      <Stack sx={styles.stackContainer}>
        {workList.map((work) => (
          <WorkDisplay
            key={work.id}
            workImages={work.workImages}
            workDesc={work.workDesc}
            detailedDesc={work.detailedDesc}
            header={work.header}
            images={work.images}
            infoLink={work.infoLink}
          />
        ))}
      </Stack>
    </Grid2>
  );
};

const styles = {
  gridContainer: {
    background:
      "linear-gradient(135deg, #003366 10%, #000000 30%, rgb(15, 15, 15) 50%, #000000 70%, #003366 90%)",
    width: "100vw",
    height: "100%",
    minHeight: "100vh",
  },
  stackContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100vw",
    paddingTop: "1rem",
    paddingBottom: "5rem",
    gap: "1.5rem",
  },
  link: {
    color: "#fff",
    display: "flex",
    gap: "0.5rem",
    width: "fit-content",
  },
  text: {
    color: "#fff",
    fontSize: "1.25rem",
    fontFamily: "Atkinson Hyperlegible Next, sans-serif",
    textAlign: "center",
  },
  linkContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "6rem",
  },
  icon: {
    color: "#007FFF",
  },
};

export default MyWork;
