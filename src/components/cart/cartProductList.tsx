import { useShoppingCart } from "use-shopping-cart";
import CartProductItem from "./cartProductItem";

import { ProductContainer } from "../../styles/components/cart/cartProductList";

export default function CartProductList() {
  const { cartDetails, removeItem } = useShoppingCart()
  
  function handleDeleteProduct (productId: string) {
    removeItem(productId)
  }

  return (
    <ProductContainer>
      {Object.entries(cartDetails).map(([productId, product]) => (
          <CartProductItem key={productId} productId={productId} product={product} onDeleteProduct={handleDeleteProduct}/>
        ))}     
    </ProductContainer>
  )
}
