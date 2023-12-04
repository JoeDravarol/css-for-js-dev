/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  width: 300px;
  height: 100%;
  background: var(--color-white);
  padding: 26px 16px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
  margin-right: -16px; // Offset padding
  margin-top: -16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;

  &:hover {
    color: var(--color-gray-900)};
  }
`

export default MobileMenu;
