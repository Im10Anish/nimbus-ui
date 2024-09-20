import React from 'react';

export interface TypographyProps {
  text: string;
}
export const Typography = ({ text }: TypographyProps) => {
  return <p>{text}</p>;
};
