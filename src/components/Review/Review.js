import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ReactAudioPlayer from 'react-audio-player';
import { PHRASES } from '../AudioForm/phrases';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: '700'
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

const Review = props => {
  const { classes, name, lastName, email, audios } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Audios
      </Typography>
      <List disablePadding>
        {Object.entries(audios).map(audio => {
          const [key, value] = audio;

          return (
            <div key={key}>
              <ListItem className={classes.listItem}>
                <ListItemText primary={key} secondary={PHRASES[key]} />
              </ListItem>
              <ReactAudioPlayer src={value.blobURL} controls />
            </div>
          );
        })}
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Informações pessoais
          </Typography>
          <Typography gutterBottom>Nome: {name}</Typography>
          <Typography gutterBottom>Sobrenome: {lastName}</Typography>
          <Typography gutterBottom>Email: {email}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Review);
