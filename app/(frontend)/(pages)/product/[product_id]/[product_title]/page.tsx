import React from "react";

interface ProductProps {
    params: {
        product_id: number,
        product_title: string
    }
}

const Product: React.FC<ProductProps> = ({params}): React.JSX.Element => {
    console.log(params)

    return (
        <div>
            <main>
                Hello from Product
            </main>
        </div>
    );
}

export default Product;
