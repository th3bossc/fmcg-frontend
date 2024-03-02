"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { ReactNode } from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const MuiContainer = ({ children }: {
    children: ReactNode
}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider >
    );
}

export default MuiContainer;