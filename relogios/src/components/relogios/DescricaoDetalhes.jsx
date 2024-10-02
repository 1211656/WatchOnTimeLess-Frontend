import React, {useState} from 'react'

export default function 
({relogio}) {
    const [descricaoOuDetalhes, setDescricaoOuDetalhes] = useState(false);
    const handleClickDescricao = () => {
        setDescricaoOuDetalhes(false)
    }
    const handleClickDetalhes = () => {
        setDescricaoOuDetalhes(true)
    }
    var album = []
    var modelo = "";
    var marca = "";
  var preco = -1;
  var stock = -1;
  var genero = "";
  var descricaoPrincipal = []

  if(relogio){
    album = relogio.album;
     modelo = relogio.modelo;
    marca = relogio.marca;
    preco = relogio.preco;
    stock = relogio.stock;
    descricaoPrincipal = relogio.descricaoPrincipal
    genero = relogio.genero;
}

    
  return (
    <div className='flex justify-center '>
        <div className='border border-gray-500 gap-2 p-9 flex flex-col rounded-md w-1/2 flex justify-center items-center'>
            <div>
                <div className='border p-3 '>
                    <div className='flex gap-3'>
                        <button onClick={handleClickDescricao} style={!descricaoOuDetalhes ? {border: '1px solid green', borderRadius: '999px', backgroundColor: 'green', color: 'white', padding: '8px'} : {}}>Descrição</button>
                        <button onClick={handleClickDetalhes} style={descricaoOuDetalhes ? {border: '1px solid green', borderRadius: '999px', backgroundColor: 'green', color: 'white', padding: '8px'} : {}}>Detalhes do Produto</button>
                        
                    </div>
                </div>
                <hr className='w-80 border-gray-400 mb-4'/>
            </div>
            {!descricaoOuDetalhes &&
            <div>
            <img src={album[3]} className='' style={{height:800,width:800}}></img>
            <div className='flex flex-col'>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        MAQUINARIA:
                    </div>
                    <span/>
                    {descricaoPrincipal[0].replace("MAQUINARIA: ", "")}
                    
                    
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        CARGA: 
                    </div>
                    <span/>
                    {descricaoPrincipal[1].replace("CARGA: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        FREQUENCIA: 
                    </div>
                    <span/>
                    {descricaoPrincipal[2].replace("FRECUENCIA: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        FUNCIONES: 
                    </div>
                    <span/>
                    {descricaoPrincipal[3].replace("FUNCIONES: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        CAJA: 
                    </div>
                    <span/>
                    {descricaoPrincipal[4].replace("CAJA: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        BISEL: 
                    </div>
                    <span/>
                    {descricaoPrincipal[5].replace("BISEL: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        CRISTAL: 
                    </div>
                    <span/>
                    {descricaoPrincipal[6].replace("CRISTAL: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        ESFERA: 
                    </div>
                    <span/>
                    {descricaoPrincipal[7].replace("ESFERA: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        CORONA: 
                    </div>
                    <span/>
                    {descricaoPrincipal[8].replace("CORONA: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        TAPA: 
                    </div>
                    <span/>
                    {descricaoPrincipal[9].replace("TAPA: ", "")}
                </div>
                <hr className=' border-gray-400 mt-3'/>
                <div className='mt-5 flex justify-center'>
                    <div className='font-semibold mr-1'>
                        CORREA: 
                    </div>
                    <span/>
                    {descricaoPrincipal[10].replace("CORREA: ", "")}
                </div>
            
            </div>
            </div>
            }
            {descricaoOuDetalhes &&
            <div>
                Referencia RL44
                En stock {stock} Artículo 
            </div>
            }
            

        </div>
        
    </div>
  )
}
