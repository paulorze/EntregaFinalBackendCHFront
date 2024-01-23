import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const CartWidget = ({theme, totalQuantity}) => {
    return (
        <Link
            to={'/cart'}
        >
            <IconButton
                size="large"
                sx={{
                    color: theme.palette.font.light
                }}
            >
                <Badge badgeContent={totalQuantity} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Link>
    );
};

export default CartWidget;