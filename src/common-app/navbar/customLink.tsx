import React from 'react';
import './navbar.styles.scss';
import { NavLink } from 'react-router-dom';

interface LinksProps {
  href: string;
  title?: string;
  target?: string;
  children?: React.ReactNode;
  className?: string;
}
export const CustomLink: React.FC<LinksProps> = ({
  href: to,
  title,
  target,
  className,
  children,
}) => {
  return (
    <NavLink to={to} target={target} className={className}>
      {title}
      {children}
    </NavLink>
  );
};
