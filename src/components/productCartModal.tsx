import  * as Dialog  from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";

import Image from "next/image";

import { 
  Close, 
  Content, 
  ImageContainer, 
  Product,     
  ProductContainer, 
  ProductDetails, 
  ProductQuantityContainer, 
  ProductValueContainer 
} from "../styles/pages/productCartModal";

import sidebar from '../assets/camisetas/1.png';
import Button from "./Button";

export default function ProductCartModal() {
  return (
      <Dialog.Portal>
        <Content>
          <Close asChild>
            <X size={24}/>
          </Close>

          <Dialog.Title>Sacola de compras</Dialog.Title>

          <ProductContainer>
            <Product>
              <ImageContainer>
                <Image src={sidebar} alt=""/>
              </ImageContainer>

              <ProductDetails>
                <div>
                  <h3>Camiseta Beyond the Limits</h3>
                  <span>R$ 79,90</span>
                </div>
                
                <button>Remover</button>
              </ProductDetails>
            </Product>
          </ProductContainer>

          <ProductQuantityContainer>
            <p>Quantidade</p>
            <span>3 itens</span>
          </ProductQuantityContainer>

          <ProductValueContainer>
            <p>Valor total</p>
            <span>R$ 270,00</span>
          </ProductValueContainer>

          <Button>Finalizar compra</Button>
        </Content>
      </Dialog.Portal>
  )
}