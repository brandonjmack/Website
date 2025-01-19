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
            description: (
                <>
                    For my capstone project, my team and I developed a mobile application called "PassThePlate."
                    This app was created for both iOS and Android devices, to do this we developed the app with
                    React Native for the front-end and Python for the backend.<br/><br/>
                    The goal of our app was to help users share homemade meals or leftover food supplies with
                    those who are less fortunate in their community. The app allowed for users to create an
                    account where they could browse and select meals that they were interested in.
                    They could then use the integrated chat feature to contact "Givers" and find a way to meet
                    and transfer the meals. The app also allowed for users to browse for meals in their area
                    using the map/location component, where they could limit their search to a specific area.<br/><br/>
                    Our app received top honours, and was chosen by our client to be used for their company and
                    deployed by a third-party. We worked closely with our client to ensure needs and expectations
                    were met.

                </>
            ),
            technologies: [""],
            link: "https://github.com/brandonjmack/Capstone-Project",
            mediaType: "images",
            images: [login, home, chat, map, settings]
        },
        {
            id: 2,
            title: "Bubble Cursor",
            description: (
                <>
                    This project was done as part of my Advanced Human-Computer Interaction (HCI)
                    class where I was tasked with recreating the experiment done by Tovi Grossman
                    and Ravin Balakrishnan using Unity and C#. The aim was to measure the efficiency of a users input
                    using different pointer methods. In this case, I compared the accuracy and speed of a
                    bubble cursor compared to the pointer cursor. <br/><br/>
                    The experiment involved creating a 2D area in Unity with targets for the user to click and
                    distractors to make it more of a challenge. The goal was to gather data from their
                    performance, which was then analyzed to evaluate which cursor type was more efficient.
                </>
            ),
            technologies: [""],
            link: "https://github.com/brandonjmack/Bubble-Cursor-COSC-441",
            mediaType: "video",
            video: bubble
        },
        {
            id: 3,
            title: "F1 Car",
            description: (
                <>
                    As part of my media studies class which focused on using code in a
                    non-traditional way for Computer Science students. I used the JavaScript
                    library P5.js to create an interactive and animated screen. I chose to
                    recreate the <i>GoodWood Festival of Speed</i>, with a focus on featuring
                    the McLaren MP4/4 Formula 1 car from 1988. <br/><br/>
                    The aim of this class for me was to expand my coding knowledge beyond
                    what is typically taught. I wanted to find a way to use code in a way I hadn't
                    done prior, and this allowed me express myself in a creative and free way that
                    is not possible with application or web development.
                </>
            ),
            technologies: [""],
            link: "https://github.com/brandonjmack/F1-Car-MDST-110",
            mediaType: "video",
            video: formulaone
        }

    ]
};

export default ProjectData;