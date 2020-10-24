import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ["'Source Sans Pro'", "'Helvetica Neue'", "Arial", "Helvetica", "sans-serif"].join(),
        fontSize: 14,
    },
    palette: {
        primary: {
            main: '#2699FB',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        // primary?: PaletteColorOptions;
        // secondary?: PaletteColorOptions;
        // error?: PaletteColorOptions;
        // warning?: PaletteColorOptions;
        // info?: PaletteColorOptions;
        // success?: PaletteColorOptions;
        // type?: PaletteType;
        // tonalOffset?: PaletteTonalOffset;
        // contrastThreshold?: number;
        // common?: Partial<CommonColors>;
        // grey?: ColorPartial;
        // text?: Partial<TypeText>;
        // divider?: string;
        // action?: Partial<TypeAction>;
        // background?: Partial<TypeBackground>;
        // getContrastText?: (background: string) => string;
    },
});

export default theme;
