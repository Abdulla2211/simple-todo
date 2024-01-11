'use client';
import styles from './Input.module.scss';
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';
import cn from 'classnames';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  name: string;
  value: string | number | readonly string[] | undefined;
  handleChange: (name: string, value: string) => void;
}

const Input = ({
  id,
  label,
  value,
  name,
  handleChange,
  className,
  required,
  ...props
}: Props): JSX.Element => {
  const [isOnFocus, setOnFocus] = useState(false);

  const handleFocus = (): void => {
    setOnFocus(true);
  };

  const handleBlur = (): void => {
    setOnFocus(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const textAreaValue = event.target.value;
    handleChange(name, textAreaValue);
  };

  return (
    <div
      className={cn(
        styles.container,
        { [styles.focus]: isOnFocus },
        { [styles.required]: required && !value },
      )}>
      <div className={styles.container__wrapper}>
        {label && (
          <label
            htmlFor={id ? id : name}
            className={cn(styles.container__wrapper__label, {
              [styles.active]: isOnFocus || value,
              [styles.focus]: isOnFocus,
            })}>
            <span>{label}</span>
          </label>
        )}
        <input
          value={value}
          name={name}
          id={id ? id : name}
          className={cn(styles.container__wrapper__input, className)}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
