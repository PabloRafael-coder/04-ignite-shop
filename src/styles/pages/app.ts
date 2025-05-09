import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin:'0 auto',
})

export const CartButton = styled('button', {
  border: 'none',
  padding: '0.75rem',
  backgroundColor: '$gray800',
  borderRadius: 6,
  cursor: 'pointer',
  position: 'relative',

  svg: {
    color: '$gray300',
    width: '1.5rem',
    height: '1.5rem',
  }
})

export const CartBadge = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '1.5rem',
  height: '1.5rem',

  position: 'absolute',
  bottom: 31,
  right: -7,

  backgroundColor: '$green500',
  border: '2px solid $gray900',
  borderRadius: 99999,
  fontSize: '0.875rem',
  fontWeight: 'bold',
  color: '$gray100'
})