import React from 'react';

export interface TypographyProps {
  text: string;
}
export const Typography = ({ text }: TypographyProps) => {
  return <>{text}</>;
};
