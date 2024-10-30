import React from "react";

interface ProductProps {
    params: {
        product_id: number,
        product_title: string
    }
}

const Product: React.FC<ProductProps> = ({params}): React.JSX.Element => {
    console.log(params);
    return (
        <main>
            Product page
        </main>
    );
}

export default Product;
