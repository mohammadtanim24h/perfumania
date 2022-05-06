import { useEffect, useState } from "react";

const useSold = () => {
    const [sold, setSold] = useState(0);
    useEffect(() => {
        fetch("https://murmuring-stream-35906.herokuapp.com/perfumes")
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    const soldItems = data.map((perfume) =>
                        parseInt(perfume.sold)
                    );
                    const initialValue = 0;
                    const soldSum = soldItems.reduce(
                        (previousValue, currentValue) =>
                            previousValue + currentValue,
                        initialValue
                    );
                    setSold(soldSum);
                }
            });
    }, []);

    return sold;
};

export default useSold;
