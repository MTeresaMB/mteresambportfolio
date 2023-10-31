import React from 'react';
import './logo.styles.scss';
import { CustomLink } from '@common-app/navbar/customLink';
export const Logo: React.FC = () => {
  return (
    <CustomLink href={'/'} className={'logo'}>
      MT
    </CustomLink>
  );
};
