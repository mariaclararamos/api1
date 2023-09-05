import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import API from '../../services/API.js';

function Filme(){
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await API.get(`/movie/${id}`, {
        params:{
          api_key: "baf8a4cd0a4eb2cd9cb9dcdda1aa2473",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(True);
      })
      .catch(()=>{
        console.log("FILME NAO ENCONTRADO")
      })
    }

    loadFilme();


    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
  }, [])

  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  
  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avalição: {filme.vote_average} / 10</strong>

    </div>
  )
}

export default Filme;

