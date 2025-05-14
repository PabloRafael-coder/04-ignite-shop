import type { Attributes, ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonContainer } from "../styles/pages/button"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest }>{children}</ButtonContainer>
}