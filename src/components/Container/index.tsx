"use client";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const Container = ({ children }: {
    children: ReactNode
}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <SessionProvider>
                {children}
            </SessionProvider>
        </ThemeProvider >
    );
}

export default Container;