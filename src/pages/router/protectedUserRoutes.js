import CartContainer from "../cart/CartContainer";
import CheckoutContainer from "../checkout/CheckoutContainer";
import ProfileContainer from "../profile/ProfileContainer";
import StoreContainer from "../store/StoreContainer";

export const protectedRoutes = [
    {
        key: 'Store',
        path: '/store',
        Element: StoreContainer
    },
    {
        key: 'Cart',
        path: '/cart',
        Element: CartContainer
    },
    {
        key: 'Checkout',
        path: '/checkout',
        Element: CheckoutContainer
    },
    {
        key: 'Profile',
        path: '/profile',
        Element: ProfileContainer
    }
]