import { Box, Paper } from "@mui/material";
import CardProductContainer from "../../../common/cardProduct/CardProductContainer";

const StoreProducts = ({theme, productsList}) => {
    return (
        <Paper
            sx={{p:4, backgroundColor: theme.palette.grey.main, mt: 4 }}
        >
            <Box
                sx={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent: 'space-around', flexWrap:'wrap', width:'100%'}}
            >
                {productsList.map( product => (
                    <CardProductContainer
                        key={product._id}
                        product={product}
                    />
                ))}
            </Box>
        </Paper>
    );
};

export default StoreProducts;