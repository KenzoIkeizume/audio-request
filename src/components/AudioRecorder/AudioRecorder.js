import React from 'react';
import { ReactMic } from 'react-mic';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { KeyboardVoice } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

import './AudioRecorder.css';

const styles = () => ({});

class AudioRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }

    this.recordingAudio = this.recordingAudio.bind(this);
  }

  recordingAudio = () => {
    this.setState({
      record: !this.state.record
    });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <Grid item xs={9} md={10}>
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#3f51b5"
            backgroundColor="#FFFFFF" />
        </Grid>
        <Grid item xs={3} md={2}>
          <Fab color={this.state.record ? "secondary" : "primary"} aria-label="Add" className={classes.fab} onClick={this.recordingAudio}>
            <KeyboardVoice />
          </Fab>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AudioRecorder);
