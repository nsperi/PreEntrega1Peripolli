import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [mascota, setMascota] = useState(null)
    const {idMascota} = useParams()

    useEffect(() => {
        const fetchData = () => {
            return fetch('/public/data/mascotas.json')
            .then((response)=>response.json())
            .then((data) => {
                const foundMascota = data.find((item) => item.id == idMascota)
                setMascota(foundMascota)
            })
            .catch((error) => console.log(error))
        }
        fetchData()
    },[idMascota])

    return (
        <div>
            {
                mascota ? <ItemDetail mascota={mascota}/>: <p>CARGANDO...</p>
            }
        </div>
    );
};

export default ItemDetailContainer;