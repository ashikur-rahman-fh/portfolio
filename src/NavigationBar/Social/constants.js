import { ReactComponent as LinkedInLogo } from "../../resource/logo/linkedin.svg";
import { ReactComponent as GithubLogo } from "../../resource/logo/github.svg";
import { ReactComponent as GmailLogo } from "../../resource/logo/gmail.svg";
import { ReactComponent as FacebookLogo } from "../../resource/logo/facebook.svg";

import { PROFILE } from "../../constants";

export const SOCIAL_PROFILES = {
    LINKED_IN: {
        LogoComponent: LinkedInLogo,
        link: "https://www.linkedin.com/in/ashikur-rahman-5h/",
        alt: "linkedIn",
        target: "blank",
    },
    GITHUB: {
        LogoComponent: GithubLogo,
        link: "https://github.com/ashikur-rahman-fh",
        alt: "GitHub",
        target: "blank",
    },
    GMAIL: {
        LogoComponent: GmailLogo,
        link: `mailto:${PROFILE.EMAIL}`,
        alt: "Gmail",
        target: "",
    },
    FACEBOOK: {
        LogoComponent: FacebookLogo,
        link: "https://www.facebook.com/ashikur.akash11/",
        alt: "Facebook",
        target: "blank",
    },
};
