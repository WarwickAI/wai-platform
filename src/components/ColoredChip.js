import React from 'react';
import PropTypes from 'prop-types';
import MaterialChip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/styles';

/*
 * https://github.com/mui-org/material-ui/issues/21135#issuecomment-861610819
 */
const ColoredChip = (props) => {
  const StyledChip = withStyles({
    root: {
      color: 'white',
      backgroundColor: `${props.customColor} !important`,
      '&:hover': {
        backgroundColor: props.customColor,
        filter: 'brightness(120%)'
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: props.customColor,
        borderColor: props.customColor
      }
    },
    outlined: {
      color: props.color,
      border: `1px solid ${props.customColor}`,
      backgroundColor: `transparent !important`
    },
    icon: {
      color: props.variant === 'outlined' ? props.customColor : 'white'
    },
    deleteIcon: {
      color: props.variant === 'outlined' ? props.customColor : 'white'
    }
  })(MaterialChip);

  return <StyledChip {...props} />;
};

ColoredChip.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.oneOf(['regular, outlined'])
};

export default ColoredChip;
