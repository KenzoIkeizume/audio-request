import React from 'react';
import { ReactMic } from 'react-mic';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import {
  KeyboardVoice,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import './AudioRecorder.css';
import Checked from './components/Checked/Checked';

const styles = () => ({});

class AudioRecorder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      record: false
    };

    this.recordingAudio = this.recordingAudio.bind(this);
  }

  recordingAudio = () => {
    this.setState({
      record: !this.state.record
    });
  };

  render() {
    const { classes, phrase, nextClick, prevClick, checked } = this.props;

    return (
      <Card className={classes.card}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom className="phrases-value">
              Frase: {phrase}
              <Checked checked={checked} />
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <button
              className="button-change"
              onClick={prevClick}
              disabled={this.state.record}
            >
              <KeyboardArrowLeft fontSize="large" />
            </button>
          </Grid>
          <Grid item xs={6}>
            <ReactMic
              record={this.state.record}
              className="sound-wave"
              onData={this.props.onData}
              onStop={this.props.onStop}
              strokeColor="#3f51b5"
              backgroundColor="#FFFFFF"
            />
          </Grid>
          <Grid item xs={2} className="fab-audio">
            <Fab
              color={this.state.record ? 'secondary' : 'primary'}
              aria-label="Add"
              className={classes.fab}
              onClick={this.recordingAudio}
            >
              <KeyboardVoice />
            </Fab>
          </Grid>
          <Grid item xs={2}>
            <button
              className="button-change"
              onClick={nextClick}
              disabled={this.state.record}
            >
              <KeyboardArrowRight fontSize="large" />
            </button>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(AudioRecorder);
