import s from './Input.module.scss'

type InputProps = {
  placeholder?: string
}

export const Input = ({placeholder}:InputProps) => {
  return (
    <input placeholder={placeholder} className={s.input}/>
  )
}
