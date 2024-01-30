
import { useState } from 'react'
import './App.css'

import Menu from './components/menu/Menu'
import N_3 from './components/n_3/N_3'
import N_11 from './components/n_11/N_11'
import N_13 from './components/n_13/N_13'
import N_18 from './components/n_18/N_18'
import N_19 from './components/n_19/N_19'
import N_26 from './components/n_26/N_26'
function App() {
  const [numero, setNumero] = useState('Metropolitana')

  return (
    <>
          <main>
            <div className='menu'>
              <div>Território {numero}</div>
              <button onClick={(e)=>{setNumero('Metropolitana')}} className='btn_inicio'>Início</button>
            </div>
            
            <Menu visualizacao={numero} setNumero={setNumero}/>
            <N_3 visualizacao={numero}/>
            <N_11 visualizacao={numero}/>
            <N_13 visualizacao={numero}/>
            <N_18 visualizacao={numero}/>
            <N_19 visualizacao={numero}/>
            <N_26 visualizacao={numero}/>
          </main>
    </>
  )
}

export default App
