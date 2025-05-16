import { Handbag } from "@phosphor-icons/react";
import  * as Dialog  from "@radix-ui/react-dialog";
import { CartBadge, CartButton } from "../styles/components/cart";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/router";

export default function Cart() {
  const { cartCount } = useShoppingCart()
  const { pathname } = useRouter();

  const shouldShowCart = pathname !== '/success'

  return (
    <Dialog.Trigger asChild>
      {shouldShowCart && 
      <CartButton>
        <Handbag size={24} color="#C4C4CC" weight="bold"/>
        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge> }
      </CartButton>}
    </Dialog.Trigger>
  )
}