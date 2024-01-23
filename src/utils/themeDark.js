import { createTheme } from "@mui/material";

export const themeDark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#004ba0', // Darker shade of primary blue
        },
        secondary: {
            main: '#f05454', // Slightly desaturated red for better contrast
        },
        font: {
            main: '#ffffff', // White text for readability
            light: '#ffffff', // Lighter gray for secondary text
            dark: '#1a1a1a', // Darker gray for subtle elements
            contrastText: '#ffffff', // Ensure contrast for accessibility
        },
        grey: {
            main: '#252525', // Dark gray for backgrounds
        },
        background: {
            default: '#121212', // Very dark base for overall background
        },
        success: {
            main: '#55c57a', // Slightly darker green for success
        },
    },
    components: {
        MuiDialog: {
            styleOverrides: {
            paper: {
                backgroundColor: '#004ba0', // Dark primary blue for dialogs
                color: '#ffffff', // White text on dialogs
            },
            },
        },
    },
});