import { useEffect, useState } from "react";

const useQuantity = () => {
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        fetch("https://murmuring-stream-35906.herokuapp.com/perfumes")
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    const quantityArr = data.map((perfume) =>
                        parseInt(perfume.quantity)
                    );
                    const initialValue = 0;
                    const totalQuantity = quantityArr.reduce(
                        (previousValue, currentValue) =>
                            previousValue + currentValue,
                        initialValue
                    );
                    setQuantity(totalQuantity);
                }
            });
    }, []);

    return quantity;
};

export default useQuantity;
