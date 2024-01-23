import { useTheme } from '@mui/material';
import StoreProducts from './StoreProducts';

const StoreProductsContainer = ({productsList}) => {
    const theme = useTheme();

    return (
        <StoreProducts
            theme={theme}
            productsList={productsList}
        />
    );
};

export default StoreProductsContainer;