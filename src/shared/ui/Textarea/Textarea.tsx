import s from "./Textarea.module.scss";

type TextareaProps = {
  placeholder?: string;
};

export const Textarea = ({placeholder}:TextareaProps) => {
  return <textarea rows={5} placeholder={placeholder} className={s.textarea}/>;
};
