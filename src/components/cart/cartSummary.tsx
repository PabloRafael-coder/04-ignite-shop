import { useShoppingCart } from "use-shopping-cart";
import { ProductQuantityContainer, ProductValueContainer } from "../../styles/components/cart/cartSummary";
import { formatCurrency } from "../../utils/formatCurrency";

export default function CartSummary() {
  const { cartCount, totalPrice} = useShoppingCart()

  return (
    <>
      <ProductQuantityContainer>
        <p>Quantidade</p>
        <span>{cartCount > 1 ? `${cartCount} itens` : `${cartCount} item`}</span>
      </ProductQuantityContainer>

      <ProductValueContainer>
        <p>Valor total</p>
        <span>{formatCurrency(totalPrice)}</span>
      </ProductValueContainer>
  </>
  )
}