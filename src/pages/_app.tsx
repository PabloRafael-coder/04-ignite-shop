import  * as Dialog  from "@radix-ui/react-dialog";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "@phosphor-icons/react";

import logoImg from '../assets/logo.svg'

import {   
  CartBadge, 
  CartButton,
  Container, 
  Header } 
from "../styles/pages/app";

import ProductCartModal from "../components/productCartModal";

import { globalStyles } from "../styles/global";
import { CartProvider } from "use-shopping-cart";
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
          <Dialog.Trigger asChild>
            <CartButton>
              <Handbag size={24} color="#C4C4CC" weight="bold"/>
              <CartBadge>1</CartBadge>
            </CartButton>
          </Dialog.Trigger>
  
          <ProductCartModal/>
        </Dialog.Root>     
      </Header>


        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
