import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({ item }) => {
  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }
  return (
    <div className="container">
      I
      <div className="producto-detalle">
        <img src={item.imagen} alt="{item.img}" />
        <div>
          <h3 className="titulo">{item.name}</h3>
          <p className="autor">{item.autor}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">$ {item.precio}</p>
          <ItemCount
                        cantidad={cantidad}
                        handleSumar={handleSumar} 
                        handleRestar={handleRestar} 
                        handleAgregar={() => {agregarAlCarrito(item,cantidad)}}/>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;