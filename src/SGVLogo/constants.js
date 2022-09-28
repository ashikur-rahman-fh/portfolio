import { ReactComponent as PythonLogo } from "../resource/logo/python.svg";
import { ReactComponent as JavaScriptLogo } from "../resource/logo/javascript.svg";
import { ReactComponent as CPlusPlusLogo } from "../resource/logo/cpp.svg";
import { ReactComponent as JavaLogo } from "../resource/logo/java.svg";
import { ReactComponent as HtmlLogo } from "../resource/logo/html.svg";
import { ReactComponent as CssLogo } from "../resource/logo/css.svg";
import { ReactComponent as DjangoLogo } from "../resource/logo/django.svg";
import { ReactComponent as ReactLogo } from "../resource/logo/react.svg";

export const LOGO_KEY = {
    PYTHON: 'Python',
    JAVA_SCRIPT: 'JavaScript',
    C_PLUS_PLUS: 'CPlusPlus',
    JAVA: 'Java',
    HTML: 'Html',
    CSS: 'Css',
    DJANGO: 'Django',
    REACT: 'React',
    DJANGO_REST: 'DjangoRest',
}

export const LOGO_STORE = {
    [LOGO_KEY.PYTHON]: {
        component: PythonLogo,
        text: 'Python',
    },
    [LOGO_KEY.JAVA_SCRIPT]: {
        component: JavaScriptLogo,
        text: 'JavaScript',
    },
    [LOGO_KEY.C_PLUS_PLUS]: {
        component: CPlusPlusLogo,
        text: 'C++',
    },
    [LOGO_KEY.JAVA]: {
        component: JavaLogo,
        text: 'Java',
    },
    [LOGO_KEY.HTML]: {
        component: HtmlLogo,
        text: 'HTML',
    },
    [LOGO_KEY.CSS]: {
        component: CssLogo,
        text: 'CSS',
    },
    [LOGO_KEY.DJANGO]: {
        component: DjangoLogo,
        text: 'Django',
    },
    [LOGO_KEY.REACT]: {
        component: ReactLogo,
        text: 'ReactJS',
    },
};
