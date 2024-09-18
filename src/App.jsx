import Dummy from "./dummy"
import './App.css'
import Web3Provider from "./context/web3Provider"

function App() {

  return (
    <>
      <Web3Provider>
        <Dummy />
      </Web3Provider>
    </>
  )
}

export default App
