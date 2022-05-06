import { useEffect, useState } from "react";

const useProductsCount = () => {
    const [productsCount, setProductsCount] = useState(0);
    useEffect(() => {
        fetch("https://murmuring-stream-35906.herokuapp.com/perfumes")
            .then((res) => res.json())
            .then((data) => {
                const count = data.length;
                setProductsCount(count);
            });
    }, []);
    return productsCount;
};

export default useProductsCount;
