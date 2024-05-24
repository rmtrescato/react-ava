function Lista2() {

  const nomes = ['Rodrigo', 'Caue', 'Pietra', 'Elaine']


  return (
    <>
      <h1> Lista de nomes legais: </h1>

      {nomes.map((nomes) => (<h1 key={nomes.indexOf}>{nomes}</h1>))}



    </>
  )
}

export default Lista2