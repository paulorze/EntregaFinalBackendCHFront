import { useSelector } from "react-redux";
import { getProductsTotalQuantity } from "../../../redux/cartSlice";
import CartWidget from "./CartWidget";
import { useTheme } from "@mui/material";


const CartWidgetContainer = () => {
    const theme = useTheme();
    const totalQuantity = useSelector(state => getProductsTotalQuantity(state));

    return (
        <CartWidget
            theme={theme}
            totalQuantity = {totalQuantity}
        />
    );
};

export default CartWidgetContainer;