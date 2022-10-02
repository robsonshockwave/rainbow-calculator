import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  customButton?: string;
  customText?: string;
  text: string;
}

export default function Button({
  customButton,
  customText,
  text,
  ...rest
}: Props) {
  return (
    <button className={customButton} {...rest}>
      <span className={customText}>{text}</span>
    </button>
  );
}
