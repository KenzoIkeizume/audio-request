import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AudioRecorder from '../AudioRecorder/AudioRecorder';

const AudioForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="name" label="Nome" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="lastName" label="Sobrenome" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="email" label="Email" fullWidth />
        </Grid>
        <AudioRecorder />
      </Grid>
    </React.Fragment>
  );
}

export default AudioForm;
