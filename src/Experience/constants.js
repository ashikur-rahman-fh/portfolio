import { LOGO_KEY } from "../SGVLogo/constants";


export const TITLE = "Work Experience";

export const EXPERIENCES = {
    enosisSolution: {
        status: {
            organization: 'Enosis Solutions',
            designation: 'Software Engineer',
            duration: 'Nov. 2021 - Aug 2022',
            place: 'Dhaka, Bangladesh',
            logoKey: LOGO_KEY.SE_JOB,
            link: 'https://www.enosisbd.com/',
            domain: "Django, ReactJS, Django REST Framework, HTML, CSS, JavaScript, Python, Git, Jira, Bitbucket, Slack, Confluence",
        },
        details: [
            "Worked on implementation of discrete features of a system",
            "Worked on some APIs of form automation that can be sent to end users and submitted by the end users.",
            "Optimized database queries using and decreased the execution time for some list APIs",
            <strong>Implemented a payment portal UI and integrated APIs for making payments</strong>,
            "Worked on critical, challenging, and old bug fixes and worked on task breakdown and estimations",
        ],
    },
    contestTrainer : {
        status: {
            organization: 'ACM lab-2, Department of CSE, Ahsanullah University and Science and Technology',
            designation: 'Programming Contest Trainer',
            duration: 'Jan. 2020 - Oct. 2021',
            place: 'Dhaka, Bangladesh',
            logoKey: LOGO_KEY.TRAINER_JOB,
            link: 'https://www.aust.edu/cse',
            domain: "Data Structures, Algorithms, Mathemametics, Programming Techniques, C++",
        },
        details: [
            <strong>Trained and helped more than 80 students over 3 semesters to participate in several programming contests</strong>,
            "Shared the knowledge of Data Structures, Algorithms, and programming techniques to solve the challengingand complicated programming problems",
            <strong>Judged, managed, and set problems in more than 6 inter AUST programming contests</strong>
        ],
    },
};
