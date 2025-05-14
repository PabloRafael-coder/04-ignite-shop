import { styled } from "..";
import  * as Dialog  from "@radix-ui/react-dialog";


export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  padding: '4.5rem 3rem 3rem',
  textAlign: 'start',

  minWidth: 480,
  height: '100vh',
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 10,

  backgroundColor: '$gray800',
  boxShadow: `4px 0px 30px rgba(0, 0, 0, 0.8)`,

  h2: {
    fontSize: '1.25rem',
    color: '$gray100',
    lineHeight: 1.6,
  },
})

export const ProductContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',
  marginBottom: 'auto',
})

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

  button: {
    background: 'none',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '$green500',
  }
})

export const ProductQuantityContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  p: {
    lineHeight: 1.6,
    color: '$gray300',
  },

  span: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: 1.6
  }
})

export const ProductValueContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '0.5rem',
  marginBottom: '3.56rem',

  p: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray300',
    lineHeight: 1.6,
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$gray300',
    lineHeight: 1.4
  }

})

export const Product = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  width: 384,
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 24,
  right: 24,

  color: '$gray300',
  cursor: 'pointer',
})