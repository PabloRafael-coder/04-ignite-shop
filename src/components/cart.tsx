import { Handbag } from "@phosphor-icons/react";
import  * as Dialog  from "@radix-ui/react-dialog";
import { CartBadge, CartButton } from "../styles/pages/app";
import { useShoppingCart } from "use-shopping-cart";

export default function Cart() {
  const { cartCount } = useShoppingCart()

  return (
    <Dialog.Trigger asChild>
      <CartButton>
        <Handbag size={24} color="#C4C4CC" weight="bold"/>
        {cartCount > 0 && <CartBadge>{cartCount}</CartBadge> }
      </CartButton>
    </Dialog.Trigger>
  )
}