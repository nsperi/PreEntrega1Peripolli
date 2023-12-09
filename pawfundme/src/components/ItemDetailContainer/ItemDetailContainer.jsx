import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [mascota, setMascota] = useState(null)
    const {idMascota} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const nuevoDoc = doc(db, "mascotas", idMascota)
        getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const nuevaMascota = {id: res.id,...data}
            setMascota(nuevaMascota)
        })
        .catch(error => console.log(error))
    },[idMascota])

    return (
        <div>
            <>
            {
                mascota ? <ItemDetail mascota={mascota}/>: <p>CARGANDO...</p>
            }
            </>
        </div>
    );
};

export default ItemDetailContainer;