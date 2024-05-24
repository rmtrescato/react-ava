function Clique(){
 function Clicado(){
   window.alert("Voce clicou no botao!")
}

 function PassouPorCima(){
  window.alert("Voce passou pelo botao, parabens!")
 }

 return(
  <div>
     <button onClick={Clicado}> Clique aqui! </button> 
         <br/><br/>
     <button onMouseEnter={PassouPorCima}> Teste </button>
  </div>
 )
}


export default Clique