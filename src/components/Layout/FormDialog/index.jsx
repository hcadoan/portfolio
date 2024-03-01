import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, onClose, children }) {
  return (
    <Dialog
      sx={{
        '.MuiPaper-root': {
          backgroundColor: 'transparent', // Đặt màu nền
          borderRadius: '16px', // Đặt bo góc
        },
      }}
      open={open}
      onClose={onClose}
    >
      {children}
    </Dialog>
  );
}
