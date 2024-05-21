function Condicional() {

 const Dinheiro = 50
 const Mercado = [
  { id: 1, name: 'Arroz', price: 12.50 },
  { id: 2, name: 'feijao', price: 10.00 },
  { id: 3, name: 'cafe', price: 17.50 },
  { id: 4, name: 'ovo', price: 4.50 }

 ]


 return (
  <div>
   {Dinheiro >= 80 ?
    (
     <p> Shoow! Voce pode comprar este item. </p>
    ) : (
     <p> poxa vida, voce nao possui Dinheiro pra compar a sua lista! </p>
    )

   }

   {Mercado.length >= 1 &&
    (
     <p> Voce possui itens na sua lista! </p>
    )
     }

  </div>
 )
}

export default Condicional