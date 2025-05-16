import { styled } from "../..";
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


export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 24,
  right: 24,

  color: '$gray300',
  cursor: 'pointer',
})