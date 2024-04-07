"use client";

import { AuthContextProvider } from "@/AuthContext";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { ReactNode } from "react";
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
            <AuthContextProvider>
                {children}
            </AuthContextProvider>
        </ThemeProvider >
    );
}

export default Container;