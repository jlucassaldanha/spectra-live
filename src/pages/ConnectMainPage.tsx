import "./ConnectMainPage.css"

import { useEffect, useState } from "react"

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaTwitch } from "react-icons/fa"
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import MainIcon from "../components/MyIcons/MainIcon";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

type InputType = {
	id: number 
	value: string
}

const schema = yup
	.object({
		broadcasterName: yup.string()
			.required("Campo obrigatório")
			.matches(/^\S+$/, "Sem espaços"),
		blockLogins: yup.array(
			yup.object({
      value: yup
        .string()
        .required("O usuário não pode estar vazio")
				.matches(/^\S+$/, "Sem espaços")
    })
		)
		.when([], {
			is: (arr: InputType[]) => arr && arr.length > 0,
			then: (s) => s.required("Campo obrigatório"),
			otherwise: (s) => s 
		})
			
	}).required()

type FormType = {
	broadcasterName: string
	blockLogins?: { value: string }[] | undefined
}

function ConnectMainPage() {
	const [blockLogins, setBlockLogins] = useState<InputType[]>([])
	const [formData, setFormData] = useState<FormType>()

	const client_id: string = "gfiv47o2hp43s1cip3bxbjx1hc84n9"
	//const redirect_uri: string = "https://view-viewers.vercel.app"
	const redirect_uri: string = "http://localhost:5173"

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onSubmit"
	})

	const addBlockLogin = () => {
		setBlockLogins((prevLogins) => {
			return [...prevLogins, {id: Date.now(), value: ""}]
		})
	}

	const removeBlockLogin = (id: number) => {
		setBlockLogins((prevLogins) => {
			return prevLogins.filter((input) => input.id !== id)
		})
	}


	useEffect(() => {
		if (formData) {
			localStorage.setItem("client_id", client_id)
			localStorage.setItem("broadcaster_login", formData.broadcasterName)
			localStorage.setItem(
				"block_logins", 
				JSON.stringify(formData.blockLogins ? formData.blockLogins.map((login) => login.value) : [])
			)

			console.log("sair")
			window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}/viewers&scope=user%3Aread%3Aemail+moderation%3Aread+moderator%3Aread%3Achatters`
			//window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=http://localhost:5173/viewers&scope=user%3Aread%3Aemail+moderation%3Aread+moderator%3Aread%3Achatters`
		}
		
	}, [formData])

	return (
		<div className="main">
			<MainIcon />
			<h1>Saiba quem está te assistindo em tempo real!</h1>
			<div className="text">
				<p>Com o <strong>Viewers show</strong> é possivel ver quem está te assistindo em tempo real.</p>
				<p>Conecte-se e tenha um feedback mais imersivo com o seu público!</p>
			</div>
			<form 
				className="form" 
				onSubmit={ handleSubmit((data: FormType) => setFormData(data)) }
			>
				<div className="text">
					<p>Insira o nome do seu canal e conecte-se pela Twitch</p>
					<Input {...register("broadcasterName")}/>
					{errors.broadcasterName && (
            <p className="errorBlock">{errors.broadcasterName.message}*</p>
          )}
				</div>
				<div className="addRemLogin">
					<div className="loginBlock">
						Adicionar usuários fora de vista?
						<Button 
							icon={<IoIosAdd size={35}/>} 
							onClick={addBlockLogin} 
							type="button"
						/>
					</div>
					{
						blockLogins.map((input, index) => {
							return (
								<div className="errorBlock" key={input.id}>
										<div className="loginBlock">	
											<Input {...register(`blockLogins.${index}.value`)}/>
											<Button 
												icon={<IoIosRemove size={35} />} 
												onClick={() => removeBlockLogin(input.id)}
												type="button"
											/>
										</div>
										{errors.blockLogins?.[index]?.value && 
											<p className="errorBlock">{errors.blockLogins[index].value.message}*</p>}
								</div>
							)
						})
					}
				</div>
				<button className="buttonConnect" type="submit">
					Conectar com a twitch
					<FaTwitch size={25}/>
				</button>
			</form>
		</div>
	)
}

export default ConnectMainPage