import { useEffect, useState } from "react";

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/perfumes")
            .then(res => res.json())
            .then(data => setPerfumes(data))
    }, [])

    return [perfumes, setPerfumes];
}

export default usePerfumes;