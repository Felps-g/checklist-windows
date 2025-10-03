import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <form action="text">
    <header>
        <h1>Segurança Windows</h1>
        <p>Marque as medidas que você utiliza e descubra quanto seu dados estão seguros</p>
      </header>
      <div>

        <div className="linha">
          <input type="checkbox" id='defender' name='seguranca1'/>
          <label htmlFor="seguranca1">Windows Defender Ativado</label><br />
        </div>

        <div className="linha">
          <input type="checkbox" id='atualizado' name='seguranca2'/>
          <label htmlFor="seguranca2">Última Versão Windows Atualizada</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" id='autenticacao' name='seguranca3'/>
        <label htmlFor="seguranca3">Autenticação de 2 fatores</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" id='firewall' name='seguranca4'/>
        <label htmlFor="seguranca4">Ativar Firewall do Windows</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" id='bitlocker' name='seguranca5'/>
        <label htmlFor="seguranca5">Ativar Bitlocker</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" id='backup' name='seguranca6'/>
        <label htmlFor="seguranca6">Backup Regular de Dados</label><br />
        </div>
        
      </div>
      </form>
    </>
  )
}

export default App
