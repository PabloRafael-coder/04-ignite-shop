import type { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonLink } from "../styles/pages/link"

interface LinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Link({children, ...rest}: LinkProps) {
  return <ButtonLink {...rest}>{children}</ButtonLink>
  
}