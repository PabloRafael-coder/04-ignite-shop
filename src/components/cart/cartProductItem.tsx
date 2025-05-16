import Image from "next/image";
import { ImageContainer, Product, ProductDetails } from "../../styles/components/cart/cartProductItem";
import { formatCurrency } from "../../utils/formatCurrency";
import Link from "../textButton";
import type { CartEntry } from "use-shopping-cart/core";

interface CartProductItemProps {
  productId: string
  product: CartEntry
  onDeleteProduct: (productId: string) => void
}

export default function CartProductItem({productId, product, onDeleteProduct}: CartProductItemProps) {
  return (
    <Product>
      <ImageContainer>
        <Image src={product.imageUrl} width={100}  height={90} alt={`Imagem da camiseta ${product.name}`}/>
      </ImageContainer>

      <ProductDetails>
        <div>
          <h3>{product.name}</h3>
          <span>{formatCurrency(product.price)}</span>
        </div>
        
        <Link onClick={() => onDeleteProduct(productId)}>Remover</Link>
      </ProductDetails>
    </Product>
  )
}