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
import { ReactComponent as GitLogo } from "../resource/logo/git.svg";
import { ReactComponent as GithubLogo } from "../resource/logo/github.svg";
import { ReactComponent as BitBucketLogo } from "../resource/logo/bitbucket.svg";
import { ReactComponent as ConflueneceLogo } from "../resource/logo/confluence.svg";
import { ReactComponent as SlackLogo } from "../resource/logo/slack.svg";
import { ReactComponent as JiraLogo } from "../resource/logo/jira.svg";
import { ReactComponent as PostgresLogo } from "../resource/logo/postgres.svg";
import { ReactComponent as VSCodeLogo } from "../resource/logo/vscode.svg";

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
    GIT: 'Git',
    GITHUB: 'Github',
    BIT_BUCKET: 'BitBucket',
    CONFLUENCE: 'Confluence',
    SLACK: 'Slack',
    JIRA: 'Jira',
    POSTGRES: 'Postgres',
    VS_CODE: 'VSCode',
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
    [LOGO_KEY.POSTGRES]: {
        component: PostgresLogo,
        text: 'PostgreSQL',
    },
    [LOGO_KEY.JIRA]: {
        component: JiraLogo,
        text: 'Jira',
    },
    [LOGO_KEY.SLACK]: {
        component: SlackLogo,
        text: 'Slack',
    },
    [LOGO_KEY.CONFLUENCE]: {
        component: ConflueneceLogo,
        text: 'Confluence',
    },
    [LOGO_KEY.BIT_BUCKET]: {
        component: BitBucketLogo,
        text: 'BitBucket',
    },
    [LOGO_KEY.GIT]: {
        component: GitLogo,
        text: 'Git',
    },
    [LOGO_KEY.GITHUB]: {
        component: GithubLogo,
        text: 'Github',
    },
    [LOGO_KEY.VS_CODE]: {
        component: VSCodeLogo,
        text: 'VS Code',
    },
};
