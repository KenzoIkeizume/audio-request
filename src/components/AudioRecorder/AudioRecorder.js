import React from 'react';
import { ReactMic } from 'react-mic';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { KeyboardVoice } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import './AudioRecorder.css';

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
    const { classes, phrase, nextClick, prevClick } = this.props;

    return (
      <Card className={classes.card}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <span className="phrases-value">Frase: {phrase}</span>
          </Grid>
          <Grid item xs={2} md={1}>
            <button className="button-change" onClick={prevClick}>
              {'<'}
            </button>
          </Grid>
          <Grid item xs={6} md={8}>
            <ReactMic
              record={this.state.record}
              className="sound-wave"
              onStop={this.props.onStop}
              onData={this.props.onData}
              strokeColor="#3f51b5"
              backgroundColor="#FFFFFF"
            />
          </Grid>
          <Grid item xs={2} className="div-voice ">
            <Fab
              color={this.state.record ? 'secondary' : 'primary'}
              aria-label="Add"
              className={classes.fab}
              onClick={this.recordingAudio}
            >
              <KeyboardVoice />
            </Fab>
          </Grid>
          <Grid item xs={2} md={1}>
            <button className="button-change" onClick={nextClick}>
              {'>'}
            </button>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(styles)(AudioRecorder);
