import  * as Dialog  from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";

import { 
  Close, 
  Content, 
} from "../../styles/components/cart/cartModal";

import { useState } from "react";
import CartProductList from "./cartProductList";
import CartSummary from "./cartSummary";
import startCheckout from "../../services/startCheckout";
import Button from "../Button";

export default function CartModal() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cartDetails } = useShoppingCart()

  const checkoutProduct = Object.entries(cartDetails).map(([_, product]) => {
    return {
      price: product.defaultPriceId,
      quantity: product.quantity,
    }
  })

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const { checkoutUrl } = await startCheckout(checkoutProduct)
  
      window.location.href = checkoutUrl  
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }    
  }

  return (
      <Dialog.Portal>
        <Content>
          <Close asChild>
            <X size={24} />
          </Close>

          <Dialog.Title>Sacola de compras</Dialog.Title>
          <CartProductList />
          <CartSummary />

          <Button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Finalizar compra</Button>
        </Content>
      </Dialog.Portal>
  )
}