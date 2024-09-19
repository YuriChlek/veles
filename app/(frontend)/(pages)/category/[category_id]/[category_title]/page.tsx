import React from "react";

interface CategoryProps {
    params: {
        category_id: number,
        category_title: string
    }
}

const Category:React.FC<CategoryProps> = ({params}): React.JSX.Element => {
    console.log(params)

    return (
        <div>
            <main>
                Hello from Category
            </main>
        </div>
    );
}

export default Category;
