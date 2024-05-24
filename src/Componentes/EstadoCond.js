import { useState } from "react"


function EstadoConst(){
  const [requisito, setRequisito] = useState(false)

  function Validacao(){
     setRequisito(true)
}
 return(
    <div>
       <button onClick={Validacao}> Validar </button>
       {requisito === true && (
           <p>Voce esta validado!</p>
       )}
    </div>

 )
}

export default EstadoConst