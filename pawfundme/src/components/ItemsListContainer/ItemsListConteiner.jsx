import React, {useState, useEffect} from 'react';
import Count from '../Count/Count';
import ItemList from '../ItemList/ItemList';

const ItemsListConteiner = () => {
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            return fetch("/data/mascotas.json")
            .then((response) => response.json())
            .then((data) => {
                setMascotas(data)
            })
            .catch((error) => console.log(error))
            
        }

        fetchData()
    }, [])

    return(
        <>
            {
                mascotas.length == 0
                ?
                <h1>CARGANDO...</h1>
                :
                <ItemList mascotas={mascotas}/>
            }
        </>
    )
};

export default ItemsListConteiner;