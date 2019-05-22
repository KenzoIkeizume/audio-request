import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Instructions from '../Instructions/Instructions';
import AudioForm from '../AudioForm/AudioForm';
import Review from '../Review/Review';
import Finish from '../Finish/Finish';
import Snackbar from '@material-ui/core/Snackbar';
import { PHRASES } from '../AudioForm/phrases';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ['Instruções', 'Cadastro do audio', 'Revisão'];

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      phraseStep: 0,
      name: '',
      lastName: '',
      email: '',
      audios: {
        audio_1: {},
        audio_2: {},
        audio_3: {},
        audio_4: {},
        audio_5: {}
      },
      snackBar: {
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: '',
        variant: ''
      }
    };

    this.onDataChange = this.onDataChange.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onData = this.onData.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
    this.handleClickVariant = this.handleClickVariant.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.getStepContent = step => {
      switch (step) {
        case 0:
          return <Instructions />;
        case 1:
          return (
            <AudioForm
              name={this.state.name}
              lastName={this.state.lastName}
              email={this.state.email}
              onDataChange={this.onDataChange}
              onStop={this.onStop}
              onData={this.onData}
              phraseStep={this.state.phraseStep}
              nextClick={this.nextClick}
              prevClick={this.prevClick}
              checked={
                !!Object.values(this.state.audios)[this.state.phraseStep].blob
              }
            />
          );
        case 2:
          return (
            <Review
              name={this.state.name}
              lastName={this.state.lastName}
              email={this.state.email}
              audios={this.state.audios}
            />
          );
        default:
          throw new Error('Unknown step');
      }
    };
  }

  handleClickVariant = (message, variant) => {
    this.setState({
      snackBar: {
        ...this.state.snackBar,
        message,
        variant,
        open: true
      }
    });
  };

  handleClose = () => {
    this.setState({
      snackBar: {
        ...this.state.snackBar,
        message: '',
        variant: '',
        open: false
      }
    });
  };

  isEmail() {
    const test = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return !test.test(this.state.email);
  }

  validateClick = nextState => {
    let isValid = true;

    if (nextState > 0) {
      if (this.state.name.length < 3) {
        this.handleClickVariant('Nome inválido!', 'warning');
        isValid = false;
      } else if (this.state.lastName.length < 3) {
        this.handleClickVariant('Sobrenome inválido!', 'warning');
        isValid = false;
      } else if (this.isEmail()) {
        this.handleClickVariant('Email inválido!', 'warning');
        isValid = false;
      }
    }

    return isValid;
  };

  nextClick = () => {
    let nextState = this.state.phraseStep;

    if (nextState === PHRASES.length - 1) {
      nextState = 0;
    } else {
      nextState = nextState + 1;
    }

    this.setState({
      phraseStep: nextState
    });
  };

  prevClick = () => {
    let prevState = this.state.phraseStep;

    if (prevState === 0) {
      prevState = PHRASES.length - 1;
    } else {
      prevState = prevState - 1;
    }

    this.setState({
      phraseStep: prevState
    });
  };

  onData = recordedBlob => {
    console.log('onData(recordedBlob) :', recordedBlob);
  }

  onStop = recordedBlob => {
    console.log('onStop(recordedBlob) :', recordedBlob);
    if (recordedBlob.stopTime - recordedBlob.startTime > 1000) {
      this.setState({
        audios: {
          ...this.state.audios,
          [PHRASES[this.state.phraseStep].key]: recordedBlob
        }
      });
    }
  };

  onDataChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleNext = () => {
    const isValid = this.validateClick(this.state.activeStep);

    if (isValid) {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Audio Recognizer
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <Finish />
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Voltar
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? 'Enviar audios'
                        : 'Próximo'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
        <Snackbar
          anchorOrigin={{
            vertical: this.state.snackBar.vertical,
            horizontal: this.state.snackBar.horizontal
          }}
          open={this.state.snackBar.open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{this.state.snackBar.message}</span>}
          autoHideDuration={2500000}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Checkout);
