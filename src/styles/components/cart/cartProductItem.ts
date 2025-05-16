import { styled } from "../../"

export const ImageContainer = styled('div', {
  width: 100,
  height: 93,
  borderRadius: 8,
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '0.5rem',
  
  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,

    h3: {
      fontSize: '$md',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '$gray300'
    },

    span: {
      fontSize: '$md',
      fontWeight: 'bold',
      lineHeight: 1.6,
      color: '$gray100'
    },
  },
})

export const Product = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  width: 384,
})