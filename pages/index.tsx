import {useState, useEffect } from 'react'
import Head from 'next/head'
import alanBtn from '@alan-ai/alan-sdk-web';
import styles from '../styles/Home.module.css'

interface itemType {
  name: string;
  price: number;
  category: string;
}

interface MyCommandDataType {
  command: string;
  data: itemType[];
}

export default function Home() {
  const [cart, setCart] = useState<itemType[]>([])
  const [menuItems, setMenuItems] = useState<itemType[]>([])

  useEffect(() => {
    alanBtn({
      key: process.env.ALAN_AI_KEY!,
      onCommand: (commandData: MyCommandDataType) => {
        if (commandData.command === 'getMenu') {
          setMenuItems(commandData.data)
        }
      },
    });
  }, []);

  const addToCart = (menuItem: itemType) => {
    setCart((oldCart) => {
      return [...oldCart, menuItem]
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS-TS Menu AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Menu AI
        </h1>

        <div className={styles.grid}>
          <section className={styles.card}>
            <h2>Menu</h2>
            <ul>
              {menuItems.map(menuItem => (
                <li key={menuItem.name}>
                  {`${ menuItem.name } - ${ menuItem.price } - ${ menuItem.category }`}
                  <button onClick={ () => addToCart(menuItem) }>Add To Cart</button>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.card}>
            <h2>Cart</h2>
            <ul>
              {cart.map(cartItem => (
                <li key={cartItem.name}>{`${ cartItem.name } - ${ cartItem.price } - ${ cartItem.category }`}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        copyright 2021
      </footer>
    </div>
  )
}
