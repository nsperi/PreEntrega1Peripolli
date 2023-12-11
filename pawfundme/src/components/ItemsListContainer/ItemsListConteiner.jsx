import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import './ItemListContainer.css'

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
        <div className='container'>
            {loading ? (
            <h1 className='spinner'>CARGANDO...</h1>
            ) : (
                <ItemList mascotas={mascotas}/>
            )}
            
        </div>
    )
};

export default ItemsListConteiner;