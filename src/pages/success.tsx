import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import type { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import type Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string
  product: {
    imageUrl: string[]
    productQuantity: number
  }
}

export default function Success({customerName, product}: SuccessProps){
  return (
    <>
      <Head>
        <title>
          Compra efetuada | Ignite Shop
        </title>

        <meta name="robots" content="noindex"/>
      </Head>

      <SuccessContainer>
        <div>
          {product.imageUrl.map(image => (
            <ImageContainer key={image}>
              <Image src={image} width={130} height={133} alt=""/>
            </ImageContainer>
          ))}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {product.productQuantity} camisetas já está a caminho da sua casa.
        </p>

        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if(!query.session_id){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data.map(product => {
    return product.price.product as Stripe.Product
  })

  const imageUrl = product.map(product => {
    return product.images[0]
  })

  const productQuantity = session.line_items.data.map(product => {
    return product.quantity
  }).reduce((acc, current) => {
    return acc + current
  }, 0)


  return {
    props: {
      customerName,
      product: {
        imageUrl,
        productQuantity
      }
    }
  }
}