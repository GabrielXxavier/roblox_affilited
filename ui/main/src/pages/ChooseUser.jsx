import fundoLogin from '../assets/fundoTelaLogin.png';
import logoRoblox from '../assets/maxresdefault.png';
import lupa from '../assets/lupa.png';
import check from '../assets/correct.png'

import { useState } from 'react';
import useDebounce from '../hooks/useDebounce.jsx';


export default function ChooseUser() {
  const [result, setResult] = useState();
  const [username, setUsername] = useState('');

  // Função de busca
  const fetchUsers = async (username) => {
    if (!username) return;
    
    try {
      const response = await fetch('http://localhost:3001/api/roblox-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: [username]
        }),
      });
      const json = await response.json();
      setResult(json.data);
      console.log(result)
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
  const debouncedFetch = useDebounce(fetchUsers, 1500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    debouncedFetch(value); // Chama a versão com debounce
  };

  const renderProfile = () => {
    if (result) {
      return <h4>{result[0].requestedUsername}</h4>
    }
    if(username){
      return <h4>Carregando..</h4>
    }

    return null // ou algum placeholder inicial
  }  
 
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="absolute inset-0 w-full h-full object-cover -z-10" src={fundoLogin} />
      <img className="w-100" src={logoRoblox} />
      <div className="rounded-2xl bg-[#090C0E] w-200 p-2">
        <div className="rounded-2xl w-full m-1px border border-white flex items-center">
          <img className="w-10 h-10" src={lupa} />
          <input
            name="username"
            type="text"
            className="flex w-180 focus:outline-none"
            placeholder="INSIRA SEU NICK"
            onChange={handleInputChange}
          />
         
      </div>
        <div className="mx-4 flex my-10 justify-between">{result?(
          <>
            <div className="flex items-center">
              <img className="mr-2 w-15 border border-width: 3 border-white rounded-full"src={result[0].imageUrl}/>
              <h4>{result[0].requestedUsername}</h4>
            </div>
            <buttom className=" w-10 flex items-center align-end"><img src={check} /></buttom>
          </>
          ): username&& (<h4>Carregando...</h4>)}
             
        </div> 
    </div>
    </div>
  );
}
