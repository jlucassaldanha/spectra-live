import "./viewersPage.css"

import IconMod from "../components/MyIcons/ModIcon"
import MyHeader from "../components/MyHeader/MyHeader"
import IconUser from "../components/MyIcons/UserIcon"
import CountContainer from "../components/CountContainer"

function ViewersPage(){
	return (
		<div className="base">
			<MyHeader>
				<h1 className="H1">
					Espectadores
				</h1>
			</MyHeader>

			<CountContainer 
				icon={<IconUser fillColor="red" />} 
				text="Espectadores totais" 
				textColor="red" 
			/>

			<div className="countHeader">
				<CountContainer 
					icon={<IconUser fillColor="white" />} 
					text="Espectadores" 
					textColor="white" 
				/>
			</div>
			

			<CountContainer 
				icon={<IconMod />} 
				text="Moderadores" 
				textColor="white" 
			/>
			
		</div>
	)
}

export default ViewersPage