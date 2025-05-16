import type { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonLink } from "../styles/components/textButton"

interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function TextButton({children, ...rest}: LinkProps) {
  return <ButtonLink {...rest}>{children}</ButtonLink>
  
}