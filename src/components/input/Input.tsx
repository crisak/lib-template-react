import { LDInput, LDLabel } from './Input.styles'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = ({ label, ...props }: InputProps) => {
  if (label) {
    const idInput = props?.id ?? label.split('').join('')
    return (
      <div>
        <LDLabel htmlFor={idInput}>{label}</LDLabel>
        <LDInput id={idInput} {...props} />
      </div>
    )
  }

  return <LDInput {...props} />
}

export default Input
