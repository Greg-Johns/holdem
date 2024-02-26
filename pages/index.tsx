import type { NextPage } from 'next'
import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

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

        <form className={styles.form}>
          <label>
            Player Count
          </label>
          <input
            id="player_count"
            type="text"
            placeholder="Player Count"
          />
          <label>
            Buy In
          </label>
          <input
            id="buy_in"
            type="text"
            placeholder="Buy In Value"
          />
          <button
            onClick={() => create_game()}
            type="button"
          >
            Create Table
          </button>
        </form>

        <footer className={styles.footer}>
          <Link href="/fish_faucet">Fish faucet</Link>
          <Link href="/table">table</Link>
          <Link href="/about">About</Link>
        </footer>

      </main>

    </div>
  )
}

export default Home
