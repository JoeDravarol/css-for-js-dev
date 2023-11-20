/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper 
      style={{
        '--height': styles.height + 'px',
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }} 
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar
        value={value}
        isNearFull={value >= 99}
        role="presentation"
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Bar = styled.span`
  display: block;
  width: ${p => p.value}%;
  height: 100%;
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  border-radius: ${p => p.isNearFull && '4px'};
`

export default ProgressBar;
