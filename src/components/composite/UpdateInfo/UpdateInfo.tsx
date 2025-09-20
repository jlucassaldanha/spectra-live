import "./UpdateInfo.css"
import { MdNewReleases } from "react-icons/md";

function UpdateInfo({ showState, onClick }: { showState: boolean, onClick: () => void }) {
	return (
		<div className="updateDiv">
			<div className="updateTitle" onClick={onClick}>
				<MdNewReleases size={28} fill="orange"/>
				<strong>Atualização!</strong>
			</div>
			<div className={`updateContainer ${ showState ? "open" : "" }`}>
				<div className="info">
					<p>Olá, tudo certo ai? Por aqui tá só melhorando!</p>
					<p>Trouxe algumas atualizações de interface:</p>
					<ul>
						<p>Pagina de espectadores:</p>
						<ul>
							<li>Agora existe um contador de espectadores totais que é a soma de moderadores e usuários comuns;</li>
							<li>Caso alguma das listas fique com 0 espectadores, ela irá sumir até que tenha algum espectador novamente;</li>
						</ul>
					</ul>  
					<p>Por enquanto é isso!</p>
				</div>
			</div>
		</div>	
	)
}

export default UpdateInfo