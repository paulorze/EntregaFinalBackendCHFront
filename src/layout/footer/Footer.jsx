import { Box, Container, Typography } from "@mui/material";
import './Footer.css';

const Footer = ({theme}) => {
    return (
        <Box 
            sx={{flexGrow: 1, backgroundColor: theme.palette.primary.main, color:theme.palette.font.light, py: 2, mt:'auto'}} 
            component='footer'
        >
            <Container maxWidth='xl'>
                <Box
                    sx={{display: 'flex', alignItems: 'center', justifyContent:'center', my:2}}
                >
                    <Typography
                        component={'a'}
                        variant="caption"
                        href="mailto:rzeszutagustin@gmail.com"
                    >
                        rzeszutagustin@gmail.com
                    </Typography>
                    <Typography
                        sx={{mx:2}}
                    >
                        |
                    </Typography>
                    <Typography
                        component={'a'}
                        variant="caption"
                        href="http://paulo.ar"
                        target="_blank"
                    >
                        http://paulo.ar
                    </Typography>
                </Box>
                <Box
                    sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}
                >
                    <Typography
                        component={'a'}
                        variant="caption"
                        href="http://paulo.ar"
                        target="_blank"
                    >
                        Creado por Paulo Rzeszut
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;