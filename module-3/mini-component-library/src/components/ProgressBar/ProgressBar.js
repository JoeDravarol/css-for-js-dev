/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--borderRadius': '4px',
  },
  medium: {
    '--height': '12px',
    '--borderRadius': '4px',
  },
  large: {
    '--height': '24px',
    '--borderRadius': '8px',
    '--barPadding': '4px',
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Progress 
      style={styles} 
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar
        style={styles}
        value={value}
        isCompleteSoon={value >= 99 }
        role="presentation"
      >
        <VisuallyHidden>Progress at {value}%</VisuallyHidden>
      </Bar>
    </Progress>
  );
};

const Progress = styled.div`
  padding: var(--barPadding);
  border-radius: var(--borderRadius);
  display: block;
  width: 370px;
  height: var(--height);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Bar = styled.span`
  display: block;
  width: ${p => p.value}%;
  height: 100%;
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  border-radius: ${p => p.isCompleteSoon && '4px' };
`

export default ProgressBar;
