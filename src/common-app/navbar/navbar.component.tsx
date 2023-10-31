//import { useState } from 'react';
import { Logo } from '@common-app/logo';
import { CustomLink } from './customLink';
import xImage from '@public/assets/x.svg';
import linkedinImage from '@public/assets/linkedin.svg';
import githubImage from '@public/assets/github.svg';
import './navbar.styles.scss';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='navbar-left'>
        <CustomLink href={'/aboutme'} title={'About'} />
        <CustomLink href={'/project'} title={'Projects'} />
        <CustomLink href={'/contact'} title={'Contact'} />
      </nav>
      <Logo />
      <nav className='navbar-right'>
        <CustomLink href={'https://github.com/MTeresaMB'} target={'_blank'}>
          <img src={githubImage} alt='logo github' className={'image'} />
        </CustomLink>
        <CustomLink
          href={'https://www.linkedin.com/in/mteresamb/'}
          target={'_blank'}
        >
          <img src={linkedinImage} alt='logo linkedin' className={'image'} />
        </CustomLink>
        <CustomLink href={'https://twitter.com/tere_milanes'} target={'_blank'}>
          <img src={xImage} alt='logo twitter' className={'image'} />
        </CustomLink>
      </nav>
    </div>
  );
};
