import React from "react";

interface CategoryProps {
    params: {
        category_id: number;
        category_title: string;
    };
}

const Category: React.FC<CategoryProps> = ({ params }): React.JSX.Element => {
    console.log(params);

    return <main>Hello from Category</main>;
};

export default Category;
