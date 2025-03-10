import { ArrowUpDown } from 'lucide-react'
import s from './SortPopup.module.scss'

export const SortPopup = () => {
  return (
    <div className={s.sort}>
        <ArrowUpDown size={16}/>
        <b>Сортировка:</b>
        <b className={s.primaryColor}>популярное</b>
    </div>
  )
}
