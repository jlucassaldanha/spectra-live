import { FaInfoCircle } from "react-icons/fa"
import "./Contact.css"
import { useState } from "react"

function Contact() {
	const [show, setShow] = useState(false)

	return (
		<div className="mainContact">
			<div className="dev" onClick={() => setShow((prev) => !prev)}>
				<FaInfoCircle size={25} fill="blue"/>
				<strong>Desenvolvido por João Lucas Saldanha</strong>
			</div>
			{ show && (
				<div className="infoContact">
					<p><strong>Em caso de duvidas ou sugestões entre com contato comigo:</strong></p>
					<p><strong>e-mail:</strong> j.lucassaldanha@gmail.com</p>
					<p><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/joao-lucas-saldanha/" target="_blank">João Lucas Saldanha</a></p>
					<p><strong>Repositório do projeto:</strong> <a href="https://github.com/jlucassaldanha/spectra-live" target="_blank">Spectra Live no GitHub</a></p>
				</div>
			)}
		</div>
	)
}

export default Contact