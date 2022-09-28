import { ReactComponent as PythonLogo } from "../resource/logo/python.svg";
import { ReactComponent as JavaScriptLogo } from "../resource/logo/javascript.svg";
import { ReactComponent as CPlusPlusLogo } from "../resource/logo/cpp.svg";
import { ReactComponent as JavaLogo } from "../resource/logo/java.svg";
import { ReactComponent as HtmlLogo } from "../resource/logo/html.svg";
import { ReactComponent as CssLogo } from "../resource/logo/css.svg";
import { ReactComponent as DjangoLogo } from "../resource/logo/django.svg";
import { ReactComponent as ReactLogo } from "../resource/logo/react.svg";
import { ReactComponent as CSharpLogo } from "../resource/logo/csharp.svg";
import { ReactComponent as BootstrapLogo } from "../resource/logo/bootstrap.svg";
import { ReactComponent as MaterialUI } from "../resource/logo/materialui.svg";
import { ReactComponent as SQLALchemyLogo } from "../resource/logo/sqlalchemy.svg";

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
    C_SHARP: 'CSharp',
    BOOTSTRAP: 'Bootstrap',
    MATERIAL_UI: 'MaterialUI',
    SQL_ALCHEMY: 'SQLAlchemy',
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
    [LOGO_KEY.C_SHARP]: {
        component: CSharpLogo,
        text: 'C#',
    },
    [LOGO_KEY.BOOTSTRAP]: {
        component: BootstrapLogo,
        text: 'Bootstrap',
    },
    [LOGO_KEY.MATERIAL_UI]: {
        component: MaterialUI,
        text: 'React Material UI',
    },
    [LOGO_KEY.SQL_ALCHEMY]: {
        component: SQLALchemyLogo,
        text: 'SQLAlchemy',
    },
};
