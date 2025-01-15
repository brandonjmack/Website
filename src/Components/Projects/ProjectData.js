// media for project id 1
import login from "./ProjectMedia/idone/login.png";
import home from "./ProjectMedia/idone/home.png";
import chat from "./ProjectMedia/idone/chat.png";
import map from "./ProjectMedia/idone/map.png";
import settings from "./ProjectMedia/idone/settings.png";

// media for project id 2
import bubble from "./ProjectMedia/idtwo/bubble.mp4"

//media for project id 3
import formulaone from "./ProjectMedia/idthree/f1_car.mp4"

const ProjectData = {
    projects: [
        {
            id: 1,
            title: "Pass The Plate",
            description: "Fill this in later",
            technologies: [""],
            link: "https://github.com/brandonjmack/Capstone-Project",
            mediaType: "images",
            images: [login, home, chat, map, settings]
        },
        {
            id: 2,
            title: "Bubble Cursor",
            description: "Fill this in later",
            technologies: [""],
            link: "",
            mediaType: "video",
            video: bubble
        },
        {
            id: 3,
            title: "F1 Car",
            description: "Fill this in later",
            technologies: [""],
            link: "",
            mediaType: "video",
            video: formulaone
        }

    ]
};

export default ProjectData;