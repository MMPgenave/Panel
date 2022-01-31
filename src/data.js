import React from "react";
import {
  FaInstagram,
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "منوی پنل شماره 1",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "منوی پنل شماره 2",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "منوی پنل شماره 3",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "منوی پنل شماره 4",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "منوی پنل شماره 5",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.instagram.com/muhammad_moshirpanahi/",
    icon: <FaInstagram />,
  },
];
