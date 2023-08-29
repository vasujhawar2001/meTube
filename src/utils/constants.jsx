import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const logo = "https://cdn.vox-cdn.com/thumbor/6MyN91DqRPwnQlOhvqPEHV8paaI=/0x0:1680x1050/1400x1050/filters:focal(840x525:841x526):no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/9130449/YTLogo_old_new_animation.gif";

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

export const demoThumbnailUrl = 'https://img.youtube.com/vi/e6TfaLa9vHM/sddefault.jpg';
export const demoChannelUrl = '/channel/TanmayBhatYT';
export const demoVideoUrl = '/video/e6TfaLa9vHM';
export const demoChannelTitle = 'Tanmay Bhat';
export const demoVideoTitle = 'INDIAS FUNNIEST TIKTOKS';
export const demoProfilePicture = 'https://yt3.googleusercontent.com/z7ld-8fd6O1_TWOwzngpxqnkNfdyyQfm-Gk0PwOSzep3LFCCtzbUWKsNGPL6Spk4hWqHZUgk=s176-c-k-c0x00ffffff-no-rj'