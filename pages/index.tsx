import { useState, useEffect } from "react";
import type { NextPage } from 'next'
import Link from "next/link";
import Head from 'next/head';
import { ethers } from "ethers";
import * as sapphire from '@oasisprotocol/sapphire-paratime';

import Image from 'next/image'
import styles from '../styles/Home.module.css';


const HARDHAT_NETWORK_ID = '23295'; // Sapphire Testnet

const Home: NextPage = () => {

  const [hasMetamask, sethasMetamask] = useState(true);

  const [client, setclient] = useState({
    isConnected: false,
  });

  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      sethasMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setclient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setclient({
          isConnected: false,
        });
      }
    } else {
      sethasMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setclient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  function create_game() {
    console.log('create game')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Texas Holdem</title>
        <meta name="description" content="A privacy preserving poker app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1>Texas Holdem</h1>

        <button className="btn connect-btn" onClick={connectWeb3}>
          {client.isConnected ? (
            <>
              {client.address.slice(0, 4)}...
              {client.address.slice(38, 42)}
            </>
          ) : (
            <>Connect Wallet</>
          )}
        </button>

        <p>
          {!hasMetamask ? (
            <Metamask />
          ) : client.isConnected ? (
            <>
              <h2>You're connected ✅</h2>
              <button
                onClick={console.log("signMessage")}
                type="button"
              >
                Sign Message
              </button>
            </>
          ) : (
            <>
              <br />
              <button onClick={connectWeb3}>
                Connect Wallet
              </button>
            </>
          )}
        </p>

        {/* <form className={styles.form}> */}
        {/*   <label> */}
        {/*     Player Count */}
        {/*   </label> */}
        {/*   <input */}
        {/*     id="player_count" */}
        {/*     type="text" */}
        {/*     placeholder="Player Count" */}
        {/*   /> */}
        {/*   <label> */}
        {/*     Buy In */}
        {/*   </label> */}
        {/*   <input */}
        {/*     id="buy_in" */}
        {/*     type="text" */}
        {/*     placeholder="Buy In Value" */}
        {/*   /> */}
        {/*   <button */}
        {/*     onClick={() => create_game()} */}
        {/*     type="button" */}
        {/*   > */}
        {/*     Create Table */}
        {/*   </button> */}
        {/* </form> */}
        {/**/}
        {/* <footer className={styles.footer}> */}
        {/*   <Link href="/fish_faucet">Fish faucet</Link> */}
        {/*   <Link href="/table">table</Link> */}
        {/*   <Link href="/about">About</Link> */}
        {/* </footer> */}
        {/**/}
      </main>

    </div>
  )
}

export default Home
