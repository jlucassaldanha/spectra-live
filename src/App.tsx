import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState<string>("")

  useEffect(() => {
    console.log("useEffect")
    console.log(token)
  }, [token])
  return (
    <div className='main'>
      <h1>Tudo pronto para começar!</h1>
      <a
        className='viewButton'
        onClick={() => {
          const hashToken: string = document.location.hash
          console.log(hashToken)
          setToken(hashToken) 
        }} 
        href="http://localhost:5173/viewers"
      >
        <strong>clique aqui</strong>
      </a>
    </div>
  )
}

export default App
