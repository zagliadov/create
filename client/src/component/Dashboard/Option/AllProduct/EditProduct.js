import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

export const EditProduct = () => {
    const dispatch = useDispatch();
    const id = useParams().id;

   
    
    return (
        <div>
            <h1>Elem</h1>


        </div>
    );
}

