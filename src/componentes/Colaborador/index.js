// importando ícone
//precisa de chaves pois não é um export default
import {AiFillCloseCircle} from "react-icons/ai";
import './colaborador.css'

// cada div colaborador vai receber um colaborador e uma cor de fundo como propriedade 
const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<div className="colaborador">
        {/* componente para deletar colaborador */}
        <AiFillCloseCircle size={28} className='deletar' onClick={aoDeletar}/>

        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador //usando export default pois só tem um componente por arquivo