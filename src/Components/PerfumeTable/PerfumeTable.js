import React from "react";
import './PerfumeTable.css';

const PerfumeTable = ({perfume, handleDelete}) => {
    const {_id, name, price, quantity, sold} = perfume;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{sold}</td>
            <td className="text-center">
                <button onClick={() => handleDelete(_id)} className="delete-btn"><i style={{color: '#FF454C', fontSize: '24px'}} className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    );
};

export default PerfumeTable;
