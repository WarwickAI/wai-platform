import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// material
import { Box, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
// amplify
import { API } from 'aws-amplify';
import { createGroup } from '../../graphql/mutations';
// components
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const initialFormState = { name: '', description: '', type: '' };

const DialogTitleStyle = styled(DialogTitle)(({ theme }) => ({
  fontSize: 24,
  marginLeft: theme.spacing(1)
}));

const FormStyle = styled('form')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '50ch'
  }
}));

// ----------------------------------------------------------------------

export default function CreateGroupButton({ groups, setGroups }) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function createEvent() {
    if (!formData.name || !formData.description || !formData.type) return;

    // Add this line in when we sort out auth
    // const user = await Auth.currentAuthenticatedUser();

    console.log('createEventMutation');
    console.log(formData.name);
    console.log(formData.description);

    try {
      await API.graphql({
        query: createGroup,
        variables: {
          input: formData
        }
        // authMode: 'AMAZON_COGNITO_USER_POOLS'
      }).then(() => {
        setOpen(false);

        console.log('createEventMutation success');
        console.log('data form is: ', formData);

        const myGroups = [...groups];
        setGroups([...myGroups, formData]);

        console.log('EventCreated');
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        Add Group
      </Button>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
        <Box sx={{ py: 1 }}>
          <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitleStyle>Create a new group</DialogTitleStyle>
            <DialogContent>
              <FormStyle>
                <div>
                  <TextField
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    value={formData.name}
                    id="outlined-basic"
                    label="Group Name"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    value={formData.description}
                    id="outlined-multiline-static"
                    label="Group Description"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    value={formData.type}
                    id="outlined-multiline-static"
                    label="Group Type"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </div>
              </FormStyle>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={createEvent} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </MenuPopover>
    </>
  );
}

CreateGroupButton.propTypes = {
  groups: PropTypes.array.isRequired,
  setGroups: PropTypes.func.isRequired
};
