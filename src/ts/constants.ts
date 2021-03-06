declare const VDITOR_VERSION: string;

const _VDITOR_VERSION = VDITOR_VERSION;

export {_VDITOR_VERSION as VDITOR_VERSION};

export abstract class Constants {
    public static readonly ZWSP: string = "\u200b";
    public static readonly MOBILE_WIDTH: number = 520;
    public static readonly CLASS_MENU_DISABLED: string = "vditor-menu--disabled";
    public static readonly EDIT_TOOLBARS: string[] = ["emoji", "headings", "bold", "italic", "strike", "link", "list",
        "ordered-list", "outdent", "indent", "check", "line", "quote", "code", "inline-code", "insert-after",
        "insert-before", "upload", "record", "table"];
    public static readonly CODE_THEME: string[] = ["abap", "algol", "algol_nu", "arduino", "autumn", "borland", "bw",
        "colorful", "dracula", "emacs", "friendly", "fruity", "github", "igor", "lovelace", "manni", "monokai",
        "monokailight", "murphy", "native", "paraiso-dark", "paraiso-light", "pastie", "perldoc", "pygments",
        "rainbow_dash", "rrt", "solarized-dark", "solarized-dark256", "solarized-light", "swapoff", "tango", "trac",
        "vim", "vs", "xcode"];
    public static readonly CODE_LANGUAGES: string[] = ["mermaid", "echarts", "mindmap", "abc", "graphviz", "apache",
        "bash", "cs", "cpp", "css", "coffeescript", "diff", "xml", "http", "ini", "json", "java", "javascript", "js",
        "makefile", "markdown", "nginx", "objectivec", "php", "perl", "properties", "python", "ruby", "sql", "shell",
        "dart", "erb", "go", "gradle", "julia", "kotlin", "less", "lua", "matlab", "rust", "scss", "typescript", "ts",
        "yaml"];
    public static readonly CDN = `https://cdn.jsdelivr.net/npm/vditor@${VDITOR_VERSION}`;
    public static readonly MARKDOWN_OPTIONS = {
        autoSpace: false,
        chinesePunct: false,
        codeBlockPreview: true,
        fixTermTypo: false,
        footnotes: true,
        linkBase: "",
        listStyle: false,
        paragraphBeginningSpace: false,
        sanitize: true,
        setext: false,
        toc: false,
    };
    public static readonly HLJS_OPTIONS = {
        enable: true,
        lineNumber: false,
        style: "github",
    };
    public static readonly MATH_OPTIONS: IMath = {
        engine: "KaTeX",
        inlineDigit: false,
        macros: {},
    };
    public static readonly THEME_OPTIONS = {
        current: "light",
        list: {
            dark: "Dark",
            light: "Light",
            wechat: "WeChat",
        },
        path: `${Constants.CDN}/dist/css/content-theme`,
    };
}
