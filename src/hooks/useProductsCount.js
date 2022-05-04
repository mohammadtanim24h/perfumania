import { useEffect, useState } from "react";

const useProductsCount = () => {
    const [productsCount, setProductsCount] = useState(0);
    useEffect(() => {
        fetch("http://localhost:5000/perfumes")
            .then((res) => res.json())
            .then((data) => {
                const count = data.length;
                setProductsCount(count);
            });
    }, []);
    return productsCount;
};

export default useProductsCount;
