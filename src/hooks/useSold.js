import { useEffect, useState } from "react";

const useSold = () => {
    const [sold, setSold] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/perfumes")
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
