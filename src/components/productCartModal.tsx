import  * as Dialog  from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";

import axios from "axios";
import { useShoppingCart } from "use-shopping-cart";

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

import { useState } from "react";
import Button from "./Button";
import Link from "./link";

export default function ProductCartModal() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cartDetails, cartCount,totalPrice, removeItem } = useShoppingCart()

  const checkoutProduct = Object.entries(cartDetails).map(([_, product]) => {
    return {
      price: product.defaultPriceId,
      quantity: product.quantity,
    }
  })

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        checkoutProduct: checkoutProduct
      })
  
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl  
      
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }    
  }

  function handleDeleteProduct (id: string) {
    removeItem(id)
  }

  const formateedProductPrice = new Intl.NumberFormat('pt-BR', {
      currency: 'BRL', 
      style: 'currency'
  })

  return (
      <Dialog.Portal>
        <Content>
          <Close asChild>
            <X size={24}/>
          </Close>

          <Dialog.Title>Sacola de compras</Dialog.Title>

          <ProductContainer>
            {cartDetails && 
              Object.entries(cartDetails).map(([id, product]) => (
                <Product key={id}>
                  <ImageContainer>
                    <Image src={product.imageUrl} width={100}  height={90} alt=""/>
                  </ImageContainer>
  
                  <ProductDetails>
                    <div>
                      <h3>{product.name}</h3>
                      <span>{formateedProductPrice.format(product.price)}</span>
                    </div>
                    
                    <Link onClick={() => handleDeleteProduct(id)}>Remover</Link>
                  </ProductDetails>
                </Product>
                ))}     
          </ProductContainer>

          <ProductQuantityContainer>
            <p>Quantidade</p>
            <span>{cartCount > 1 ? `${cartCount} itens` : `${cartCount} item`}</span>
          </ProductQuantityContainer>

          <ProductValueContainer>
            <p>Valor total</p>
            <span>{formateedProductPrice.format(totalPrice)}</span>
          </ProductValueContainer>

          <Button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Finalizar compra</Button>
        </Content>
      </Dialog.Portal>
  )
}