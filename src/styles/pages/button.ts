import { styled } from "..";

export const ButtonContainer = styled('button', {
  padding: '1.25rem 2rem',
  border: 'none',
  borderRadius: 8,
  backgroundColor: '$green500',

  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: 1.6,
  color: '$white',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$green300',
  }
})