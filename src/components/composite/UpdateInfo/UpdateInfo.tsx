import { useState } from "react";
import "./UpdateInfo.css"

import { MdNewReleases } from "react-icons/md";

function UpdateInfo() {
	const [showInfo, setShowInfo] = useState(false)

	return (
		<div className="updateDiv">
			<div className="updateTitle" onClick={() => setShowInfo((prev) => !prev)}>
				<MdNewReleases size={28} fill="orange"/>
				<strong>Atualização!</strong>
			</div>
			<div className={`updateContainer ${ showInfo ? "open" : "" }`}>
				<div className="info">
					<p>Olá, tudo certo ai? Por aqui tá só melhorando!</p>
					<p>Trouxe algumas atualizações de interface e usabilidade:</p>
					<ul>
						<p>Botões de "Salvar":</p>
						<ul>
							<li>Os dois botões de salvamento foram subtituidos por um único que agora fica no final da página. Agora um botão salva as duas listas</li>
							<li>Uma mensagem de feedback é mostrada logo acima do botão "Salvar" quando um novo dado é salvo</li>
						</ul>
						<p>Botão "Adicionar":</p>
						<ul>
							<li>Uma mensagem de feedback aparece logo abaixo do campo de nome de usuário e botão "Adicionar" quando um usuário não é encontrado</li>
							<li>Caso um formato de nome inválido seja pesquisado uma mensagem aparecerá no mesmo lugar</li>
						</ul>
					</ul>  
					<p>Por enquanto é isso!</p>
				</div>
			</div>
		</div>	
	)
}

export default UpdateInfo