import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@material-ui/core';

// ----------------------------------------------------------------------

ProjectPostsSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func
};

export default function ProjectPostsSort({ options, onSort }) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
