import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AudioRecorder from '../AudioRecorder/AudioRecorder';
import { PHRASES } from './phrases';

const AudioForm = props => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cadastro
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="name"
            label="Nome"
            value={props.name}
            fullWidth
            onChange={props.onDataChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="lastName"
            label="Sobrenome"
            value={props.lastName}
            fullWidth
            onChange={props.onDataChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            label="Email"
            value={props.email}
            fullWidth
            onChange={props.onDataChange}
          />
        </Grid>
        <AudioRecorder
          onStop={props.onStop}
          onData={props.onData}
          phrase={PHRASES[props.phraseStep].phase}
          nextClick={props.nextClick}
          prevClick={props.prevClick}
          checked={props.checked}
        />
      </Grid>
    </React.Fragment>
  );
};

export default AudioForm;
