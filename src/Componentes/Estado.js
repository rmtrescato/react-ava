import {useState} from 'react'


function Estado() {
 const [idade, setIdade] = useState(1)
 
 function Aniversario(){
     setIdade(idade+1)
 }

 return (
  <>
      <button onClick={Aniversario}> Clique aqui para fazer aniversario </button>
      <br/>
      {idade}
  </>

 )
}


export default Estado