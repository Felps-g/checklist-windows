import { useState } from 'react'
import './App.css'

function App() {
  const [resultado, setResultado] = useState(0);
  const totalcheckbox = 8;

  const calSeguranca = () => {
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    const marcados = checkbox.length;
    const resultado = (marcados / totalcheckbox) * 100;
    setResultado(resultado);
  };
  return (
    <>
    <form action="text">
    <header>
        <h1>Segurança Windows</h1>
        <p>Marque as medidas que você utiliza e descubra o quanto seus dados estão seguros no Windows.</p>
      </header>
      <div className='content'>

        <div className="linha">
          <input type="checkbox" value= "12.5" onChange={calSeguranca} />
          <label htmlFor="seguranca1">Windows Defender Ativado</label><br />
        </div>

        <div className="linha">
          <input type="checkbox" value= "12.5" onChange={calSeguranca}/>
          <label htmlFor="seguranca2">Última Versão Windows Atualizada</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" value= "12.5" onChange={calSeguranca}/>
        <label htmlFor="seguranca3">Autenticação de 2 fatores</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" value= "12.5" onChange={calSeguranca}/>
        <label htmlFor="seguranca4">Ativar Firewall do Windows</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" value= "12.5" onChange={calSeguranca}/>
        <label htmlFor="seguranca5">Ativar Bitlocker</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" value= "12.5" onChange={calSeguranca}/>
        <label htmlFor="seguranca6">Backup Regular de Dados</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" value= "12.5" onChange={calSeguranca}/>
        <label htmlFor="seguranca7">Uso de VPN em Wi-Fi Público</label><br />
        </div>

        <div className='linha'>
        <input type="checkbox" value= "12.5" onChange={calSeguranca}/>
        <label htmlFor="seguranca8">Uso de Gerenciador de Senhas</label><br />
        </div>

      </div>
       <footer>
          <p id="resposta">Você está<br />{resultado}% <br />Seguro</p>
        </footer>
      </form>
    </>
  )
}

export default App
