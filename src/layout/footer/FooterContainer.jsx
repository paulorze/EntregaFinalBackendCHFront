import { useTheme } from '@mui/material';
import Footer from './Footer';

const FooterContainer = () => {
    const theme = useTheme();

    return (
        <Footer
            theme={theme}
        />
    );
};

export default FooterContainer;