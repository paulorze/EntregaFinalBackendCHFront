import { useTheme } from '@mui/material';
import CheckoutContextComponent from '../../context/CheckoutContext';
import Checkout from './Checkout';

const CheckoutContainer = () => {
    const theme = useTheme();

    return (
        <CheckoutContextComponent>
            <Checkout
                theme = {theme}
            />
        </CheckoutContextComponent>
    );
};

export default CheckoutContainer;