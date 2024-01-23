import { Paper, Typography } from "@mui/material";
import ToastComponent from "../../common/toast/ToastContainer";
import SkeletonStoreContainer from "./skeletonStoreWidget/SkeletonStoreWidgetContainer";
import StoreProductsContainer from "./storeProducts/StoreProductsContainer";

const Store = ({theme, productsList, loading}) => {
    return (
        <main
            style={{padding: "2rem", backgroundColor: theme.palette.primary.light }}
        >
            <Paper
                sx={{p:4, pb:0, backgroundColor: theme.palette.grey.main}}
            >
                <Typography
                    variant="h3"
                    sx={{mb:2}}
                >
                    Tienda
                </Typography>
            </Paper>
            {loading 
                ? <SkeletonStoreContainer/>
                : <StoreProductsContainer
                    productsList={productsList}
                />
                }
            <ToastComponent
                mensaje={'¡El producto se ha agregado al carrito exitosamente!'}
            />
        </main>

    );
};

export default Store;