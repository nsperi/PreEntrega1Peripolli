import React, {useState, useEffect} from 'react';
import Count from '../Count/Count';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

const ItemsListConteiner = () => {
    const [mascotas, setMascotas] = useState([]);
    const[loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        setLoading(true);

        const db = getFirestore()

        const misMascotas = categoryId
        ? query(collection(db, "mascotas"), where("categoria", "==", categoryId))
        : collection(db, "mascotas")

        getDocs(misMascotas)
        .then((res) => {
            const nuevasMascotas = res.docs.map((doc) =>{
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setMascotas(nuevasMascotas)
        })
        .catch((error) => console.log(error))
        .finally(() => {
            setLoading(false)
        })

    }, [categoryId]);

    return(
        <>
            {loading ? (
            <h1 className='spinner'>CARGANDO...</h1>
            ) : (
                <ItemList mascotas={mascotas}/>
            )}
            
        </>
    )
};

export default ItemsListConteiner;