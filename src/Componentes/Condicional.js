function Condicional() {

 const DinheiroAtual = 100
 const Salario = 1000

 function SalarioAtual(A, B){
   var C = A + B
   return(
      C
   )
 }


 var Total = SalarioAtual(DinheiroAtual, Salario)

 const Mercado = [
  { id: 1, name: 'Arroz', price: 12.50 },
  { id: 2, name: 'feijao', price: 10.00 },
  { id: 3, name: 'cafe', price: 17.50 },
  { id: 4, name: 'ovo', price: 4.50 }

 ]


 return (
  <div>
   {Total >= 80 ?
    (
     <p> {Total} </p>
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