import Button from "../components/Button/Button"
import ServerApi  from "../utils/ServerApi"

function DashboardPage(){
    const handleClick = () => {
        ServerApi.post("/auth/logout")
            .then((response) => {
               console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

        window.location.href = "http://localhost:5173/home"
    }

    return (
        <div>
            aaaaa
            <Button onClick={handleClick}>
                Sair
            </Button>
        </div>
    )
}

export default DashboardPage