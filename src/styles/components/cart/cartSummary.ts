import { styled } from "../.."

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
