import React, {useEffect, useState} from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import SelectCharacter from './Components/SelectCharacter';
import { CONTRACT_ADDRESS, transformCharacterData } from './constants';
import myEpicGame from './utils/MyEpicGame.json';
import { ethers } from 'ethers';
import LoadingIndicator from './Components/LoadingIndicator';

import Arena from './Components/Arena';

// Constants
const App = () => {

   //Just a state variable we use to store our user's public wallet. Don't forget to import useState.
  const [currentAccount, setCurrentAccount] = useState(null);

  // new state property
  const [characterNFT, setCharacterNFT] = useState(null);

  // state for laoding indicator
  const [isLoading, setIsLoading] = useState(false);




   // Since this method will take some time, make sure to declare it as async 
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window; // checking if user is connected to metamask

      if (!ethereum) {
        console.log('Make sure you have MetaMask!');

        //set isLoading here
        setIsLoading(false);
        return;
      } else {
        console.log('We have the ethereum object', ethereum);

        //Check if we're authorized to access the user's wallet        
        const accounts = await ethereum.request({ method: 'eth_accounts' });

        //User can have multiple authorized accounts, we grab the first one if its there!
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log('Found an authorized account:', account);
          setCurrentAccount(account);
        } else {
          console.log('No authorized account found');
        }
      }
    } catch (error) {
      console.log(error);
    }

    //we release the state property after the function logic above
    setIsLoading(false);
  };

  // Render Methods

  const renderContent = () => {

        /*
    * If the app is currently loading, just render out LoadingIndicator
    */
    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (!currentAccount) {
      return (
        <div className="connect-wallet-container">
          <img
                src ="https://cloudflare-ipfs.com/ipfs/QmdigjeCtxEnDaMDkNBJSzuZxAYv2uGwaFxh4GNG5Md28J"
                alt="Firefight"
          />
          <button
            className="cta-button connect-wallet-button"
            onClick={connectWalletAction}
          >
            Connect Wallet To Get Started
          </button>
        </div>
      );
    } else if (currentAccount && !characterNFT) {
      return <SelectCharacter setCharacterNFT={setCharacterNFT} />;	
    /*
    * If there is a connected wallet and characterNFT, it's time to battle!
    */
    } else if (currentAccount && characterNFT) {
      return <Arena characterNFT={characterNFT} />;
    }
  }; 
  

  // implement connectwallet method here
  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      // Fancy method to request access to account.
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      //Boom! This should print out public address once we authorize Metamask.
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setIsLoading(true);
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    /*
     * The function we will call that interacts with out smart contract
     */
    const fetchNFTMetadata = async () => {
      console.log('Checking for Character NFT on address:', currentAccount);
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        myEpicGame.abi,
        signer
      );
  
      const txn = await gameContract.checkIfUserHasNFT();
      if (txn.name) {
        console.log('User has character NFT');
        setCharacterNFT(transformCharacterData(txn));
      } else {
        console.log('No character NFT found');
      }
    };
  
    /*
     * We only want to run this, if we have a connected wallet
     */
    if (currentAccount) {
      console.log('CurrentAccount:', currentAccount);
      fetchNFTMetadata();
    }
  }, [currentAccount]);
  return (
    <div className="App">

      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">🔥<a href="https://www.youtube.com/watch?v=-btl654R_pY">Zima Moto</a>🔥</p>
          <p className="sub-text0">Do the best you can!</p> 
          <p className="sub-text1">Create an impact!</p> 
          <p className="sub-text2">Team up to put out the forest fire!</p>

          <div className="connect-wallet-container">
            {renderContent()}
            </div>
          </div>
          
          <div className="footer-container">
            <a
              className="footer-text"
              href={"https://paulkiage.carrd.co/"}
              target="_blank"
              rel="noreferrer"
            >{`🎨 built by Paul Kiage`}</a>
          </div>
        </div>
 
      </div>
    );
  };
  
  export default App;