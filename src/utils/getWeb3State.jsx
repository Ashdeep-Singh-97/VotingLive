import { ethers } from "ethers"
import abi from "../constant/abi.json"
import axios from 'axios';

export const getWeb3State = async () => {
    try {
        //metamask installation check
        if (!window.ethereum) {
            throw new Error("Metamask is not installed")
        }
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })
        console.log("accounts",accounts)
        const selectedAccount = accounts[0];

        const chainIdHex = await window.ethereum.request({
            method: 'eth_chainId'
        })
        const chainId = parseInt(chainIdHex, 16);
        const provdier = new ethers.BrowserProvider(window.ethereum)
        const signer = await provdier.getSigner()
        const contractAddress = "0xCCC15B5CCAF92d34f3A99c2270920D3Fcf42c290";
        const message = "Welcome to Voting Dapp.";
        const signature = await signer.signMessage(message);
        const dataSignature = {
            signature
        }
        console.log("selectedAccount is ",selectedAccount);
        const res = await axios.post(`http://localhost:3000/api/authentication?accountAddress=${selectedAccount}`, dataSignature);        console.log(res.data.token);
        localStorage.setItem("token",res.data.token);
        const contractInstance = new ethers.Contract(contractAddress, abi, signer)
        return { contractInstance, selectedAccount, chainId }
    } catch (error) {
        console.error(error)
        throw new Error
    }
}
