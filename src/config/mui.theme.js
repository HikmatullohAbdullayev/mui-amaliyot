
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    breakpoints:{
        values:{
            lg: 1720,
        }
    },
    typography:{
        fontFamily:['Bebas Neue', 'sans-serif' ].join(",")
    }
})