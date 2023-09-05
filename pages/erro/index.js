import { Link } from "react-router-dom";
import './erro.css';


function erro(){
    return(
        <div className="not-found">
            <h1>440</h1>
            <h2>Página não encontrada!</h2>
            <Link to='/'>Veja todos os filmes!</Link>
            </div>
    )
}

export default erro; 