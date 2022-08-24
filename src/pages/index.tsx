import {GetStaticProps} from "next"
import {stripe} from "../services/stripe"

// elemento head importado no next para fazer um title dinâmico por paágina
import Head from "next/head"
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "../styles/home.module.scss";

interface HomeProps{
  product: {
    priceId: string,
    amount: number
  }
}


export default function Home({product}: HomeProps) {

  return(
    <>
      <Head> 
          <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
            <span>👏 Hei, welcome</span>
            <h1>New about the <span>React</span> world.</h1>
            <p>
              Get access to all the publications <br />
              <span>for {product.amount} month</span>
            </p>

            <SubscribeButton priceId={product.priceId}/>
        </section>


        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
      
    </>
  );
}

// O SSR - SSG : só devem ser construidos dentro das páginas e nao nos componentes
export const getStaticProps:GetStaticProps  = async () =>{
  
  const price = await stripe.prices.retrieve('price_1JpAwjADqLaUP9ctGXNtxqMV')
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  
  }


  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}