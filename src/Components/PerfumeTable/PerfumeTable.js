import React from "react";
import { useNavigate } from "react-router-dom";
import './PerfumeTable.css';

const PerfumeTable = ({perfume, handleDelete}) => {
    const {_id, name, price, quantity, sold} = perfume;
    const navigate = useNavigate();
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{sold}</td>
            <td className="text-center">
                <div>
                    <div className="mb-1">
                        <button onClick={() => handleDelete(_id)} className="delete-btn"><i style={{color: '#FF454C', fontSize: '24px'}} className="fa-solid fa-trash"></i></button>
                    </div>
                    <div style={{height: '1px', backgroundColor: 'lightgray'}}></div>
                    <div className="mt-2">
                        <button onClick={() => navigate(`/inventory/${_id}`)} className="btn-update-td rounded-pill">Update</button>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default PerfumeTable;
