'use client';

import { ChangeEvent, KeyboardEvent } from 'react';
import styles from './Radio.module.scss';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface RadioOption
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  checked?: boolean;
}

interface Props {
  name: string;
  title: string;
  gridAutoFlow?: 'row' | 'column';
  options: RadioOption[];
  handleChange: (name: string, value: string) => void;
}

export default function Radio({
  name,
  title,
  gridAutoFlow = 'column',
  options,
  handleChange,
}: Props): JSX.Element {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handleChange(name, value);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>, value: string) => {
    if (event.key === 'Enter') {
      handleChange(name, value);
    }
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.fieldset__legend}>{title}</legend>
      <div className={styles.fieldset__list} style={{ gridAutoFlow: gridAutoFlow }}>
        {options?.map((option) => {
          const { id, label, value, checked, ...props } = option;
          return (
            <label key={id} htmlFor={id} className={styles.fieldset__list__label}>
              <input
                className={styles.fieldset__list__label__radio}
                type="radio"
                id={id}
                name={id}
                value={value}
                checked={checked}
                onChange={onChange}
                onKeyDown={(event) => onKeyDown(event, value)}
                {...props}
              />
              <span className={styles.fieldset__list__label__text}>{label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
