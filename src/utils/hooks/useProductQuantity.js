import { useState } from "react";

const useProductQuantity = (quantity)=> {
    const [cantidadProducto, setCantidadProducto] = useState(quantity);
    const cantidadAgregar = ()=> {
        setCantidadProducto(cantidadProducto + 1)
    };
    const cantidadRestar = ()=>{
        setCantidadProducto(cantidadProducto - 1)
    };

    return {cantidadProducto, cantidadAgregar, cantidadRestar}
};

export default useProductQuantity;