import React, { useState, useContext } from 'react';
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const CheckOut = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');
  const { cart, total, cantidadTotal, clearCart } = useContext(CartContext);

  const manejarFormulario = (event) => {
    event.preventDefault()

    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
      setError('Completar todos los datos')
      return;
    }

    if(email !== emailConfirmacion){
      setError('Revisa el campo de email')
      return;
    }

    const db = getFirestore()

    const orden = {
      items: cart.map((mascota) => ({
        id: mascota.mascota.id,
        nombre: mascota.mascota.nombre,
        cantidad: mascota.cantidad
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email
    }

    Promise.all(
      orden.items.map(async (mascotaOrden) => {
        const mascotaRef = doc(db, 'mascotas', mascotaOrden.id)
        const mascotaDoc = await getDoc(mascotaRef)
        const stockActual = mascotaDoc.data().stock

        await updateDoc(mascotaRef, {
          stock: stockActual - mascotaOrden.cantidad
        });
      })
    )
    .then(() => {
      addDoc(collection(db, 'ordenes'), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        clearCart()
      })
      .catch((error) => {
        setError('Se produjo un error al crear la orden')
      })
    })
    .catch((error) => {
      console.error('Error al actualizar el stock:', error);
      setError('No es posible actualizar el stock')
    })

  };
  return (
    <div>
      <h2>Ingresa tus datos</h2>

      {cart.map((mascota) => (
        <div key={mascota.mascota.id}>
          <p>
            {mascota.mascota.nombre}: Donar ${mascota.cantidad}
          </p>
        </div>
      ))}

      <form onSubmit={manejarFormulario}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
          <label htmlFor="telefono">Telefono</label>
          <input type="number" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="emailConfirmacion">Confirma tu e-mail</label>
          <input
            type="email"
            id="emailConfirmacion"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Donar</button>

        {ordenId && <p>GRACIAS POR TU DONACION!! Tu numero ID es: {ordenId}</p>}
      </form>
    </div>
  );
};

export default CheckOut;
