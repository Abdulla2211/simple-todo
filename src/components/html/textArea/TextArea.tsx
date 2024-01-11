'use client';
import { ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useRef, useState } from 'react';
import styles from './TextArea.module.scss';
import cn from 'classnames';

export interface Props
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  handleChange: (name: string, value: string) => void;
}

function TextArea({
  id,
  label,
  value,
  name,
  handleChange,
  className,
  ...props
}: Props): JSX.Element {
  const [isOnFocus, setOnFocus] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocus = (): void => {
    setOnFocus(true);
    if (textareaRef.current) {
      // Вызываем метод focus() для ссылки на textarea
      textareaRef.current.focus();
    }
  };

  const handleBlur = (): void => {
    setOnFocus(false);
  };

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaValue = event.target.value;
    handleChange(name, textAreaValue);
  };

  return (
    <div
      className={cn(
        styles.container,
        { [styles.focus]: isOnFocus },
        { [styles.container__no_label]: !label },
      )}>
      <div className={styles.container__wrapper}>
        {label && (
          <label
            htmlFor={id ? id : name}
            className={cn(
              styles.container__wrapper__label,
              { [styles.active]: isOnFocus || value },
              { [styles.focus]: isOnFocus },
            )}
            onClick={handleFocus}>
            {label}
          </label>
        )}
        <textarea
          id={id ? id : name}
          ref={textareaRef}
          className={cn(styles.container__wrapper__textarea, className)}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </div>
    </div>
  );
}

export default TextArea;
