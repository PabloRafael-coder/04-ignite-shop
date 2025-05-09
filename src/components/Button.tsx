import type { ReactNode } from "react"
import { ButtonContainer } from "../styles/pages/button"

interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>
}