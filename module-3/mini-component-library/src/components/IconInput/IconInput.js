import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    padding: 4,
    paddingLeft: 8,
    iconSize: 12,
  },
  large: {
    padding: 8,
    paddingLeft: 12,
    iconSize: 16,
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper>
      <IconWrapper
        style={{
          '--size': styles.iconSize + 'px'
        }}
      >
        <VisuallyHidden htmlFor="icon">
          {label}
        </VisuallyHidden>
        <Icon 
          id={icon} 
          size={styles.iconSize}
        />
      </IconWrapper>
      <NativeInput
        style={{
          '--padding': styles.padding + 'px',
          '--paddingLeft': styles.iconSize + styles.paddingLeft + 'px',
          '--width': width + 'px',
        }}
        placeholder={placeholder}
        iconSize={styles.iconSize}
      />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  position: relative;
`;

const IconWrapper = styled.span`
  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
`;

const NativeInput = styled.input`
  padding: var(--padding);
  width: var(--width);
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: var(--paddingLeft);
  font-weight: 700;
  color: ${COLORS.gray700};

  &:hover {
    border-width: 2px;
    color: ${COLORS.black}
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
    font-size: 0.875rem;
  }

  & > svg {
    color: inherit;
  }
`;

export default IconInput;
