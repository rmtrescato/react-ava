function Lista() {

   const Mercado = [
      {id:1, name:'Arroz', price:12.50},
      {id:2, name:'feijao', price:10.00},
      {id:3, name:'cafe', price:17.50},
      {id:4, name:'ovo', price:4.50}
   
   ]


   return (
  <>
     <h1> Rendereização de Listas </h1>
   
     {Mercado.map((Mercado) => (
         <p key={Mercado.id} >{Mercado.name} possui o preco: R${Mercado.price}</p>
     )

     )}
  </>
 )
}

export default Lista