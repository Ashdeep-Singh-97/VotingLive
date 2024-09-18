import Dummy from "./dummy"
import './App.css'
import Web3Provider from "./context/web3Provider"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/routes";

function App() {
  return (
    <>
      <Web3Provider>
        <RouterProvider router={routes}></RouterProvider>
      </Web3Provider>
    </>
  )
}

export default App
