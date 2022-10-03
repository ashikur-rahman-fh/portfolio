import { buildRoute } from "../../utility/helper"

export const MENU = {
    ABOUT: {
        displayText: 'About',
        link: buildRoute('#about'),
    },
    EXPERIENCE: {
        displayText: 'Experience',
        link: buildRoute('#experience'),
    },
    SKILL: {
        displayText: 'Skill',
        link: buildRoute('#skill'),
    },
    RESUME: {
        displayText: 'Resume',
        link: buildRoute('resume'),
        route: true,
    },
    PROJECTS: {
        displayText: 'Projects',
        link: buildRoute('#projects'),
    },
}