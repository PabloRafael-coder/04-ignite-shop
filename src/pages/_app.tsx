import  * as Dialog  from "@radix-ui/react-dialog";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

import logoImg from '../assets/logo.svg'

import {   
  Container, 
  Header } 
from "../styles/pages/app";

import ProductCartModal from "../components/productCartModal";

import { globalStyles } from "../styles/global";
import { CartProvider } from "use-shopping-cart";
import Cart from "../components/cart";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <CartProvider  
        cartMode="checkout-session"
        stripe={process.env.STRIPE_PUBLIC_KEY}
        currency="BRL"
        shouldPersist={true}
      >
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>

        <Dialog.Root>
          <Cart/>

          <ProductCartModal/>
        </Dialog.Root>     
      </Header>

        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
