import {useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface itemType {
  name: string;
  price: number;
  category: string;
}

const menuItems = [
  {name: "Angus Burger", price: 8.99, category: 'burger'},
  {name: "Tuna Steak Burger", price: 15.00, category: 'burger'},
  {name: "Bacon Burger", price: 11.50, category: 'burger'},
  {name: "Southwest Chicken Burger", price: 9.99, category: 'burger'},
  {name: "Mozzarella Burger", price: 12.50, category: 'burger'},
  {name: "Cesar Salad", price: 6.50, category: 'salad'},
  {name: "BBQ Chicken Salad", price: 13.99, category: 'salad'},
  {name: "Garden Salad", price: 9.99, category: 'salad'},
  {name: "Veggie Lasagna", price: 17.99, category: 'pasta'},
  {name: "Spaghetti & Meatballs", price: 17.99, category: 'pasta'},
  {name: "Fettuccine Alfredo", price: 17.99, category: 'pasta'},
];

export default function Home() {
  const [cart, setCart] = useState<itemType[]>([])

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
