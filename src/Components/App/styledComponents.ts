import styled from "styled-components/macro";
import {createMuiTheme} from "@material-ui/core";

export const AppWrapper = styled.div`
    
`;

export const mainTheme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        type: "dark",
        primary: {
            light: '#19BD50',
            main: '#4CC86B',
            dark: '#02852E'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
        background: {
            paper: '#2C2C2C',
            default: '#212121',
        },
        action: {
            active: 'rgba(255, 255, 255,0.54)',
            hover: 'rgba(255, 255, 255, 0.04)',
            selected: 'rgba(255, 255, 255, 0.08)',
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        htmlFontSize: 1,
    },
    overrides: {
        MuiChip: {
            root: {
                margin: 2
            }
        },
        MuiIcon: {
            colorPrimary: {
                light: '#19BD50',
                main: '#4CC86B',
                dark: '#02852E'
            }
        }
    }
});