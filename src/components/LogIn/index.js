import { useHistory } from 'react-router';
import {Button, Box, Typography, Modal} from '@mui/material';

import { getIsLoggedIn } from '../../utils';
import { STORAGE_KEYS } from '../../utils/constants';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Login = ({open, handleClose }) => {

  const {push} = useHistory();
  const isLoggedIn = getIsLoggedIn();

  const login = () => {
    localStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, 'true');
    push('/');
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
    push('/');
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please to log in.
          </Typography>
          {
          !isLoggedIn ? 
            <Button onClick={login}>Log in</Button> :
            <Button onClick={logout}>Log out</Button>
          }
        </Box>
      </Modal>
    </div>
  );
};

export default Login;