import { styled } from "..";

export const ButtonLink = styled('button', {
  background: 'none',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  lineHeight: 1.6,
  color: '$green500',
  cursor: 'pointer',

  '&:hover': {
    color:'$green300'
  }
})