import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const audios = [
  { name: 'Audio 1', desc: 'A nice thing', seconds: '23' },
  { name: 'Audio 2', desc: 'Another thing', seconds: '12' },
  { name: 'Audio 3', desc: 'Something else', seconds: '2' },
  { name: 'Audio 4', desc: 'Best thing of all', seconds: '42' },
  { name: 'Audio 5', desc: 'Best thing of all', seconds: '42' },
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Review(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Audios
      </Typography>
      <List disablePadding>
        {audios.map(audio => (
          <ListItem className={classes.listItem} key={audio.name}>
            <ListItemText primary={audio.name} secondary={audio.desc} />
            <Typography variant="body2">{audio.seconds}s</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Informações pessoais
          </Typography>
          <Typography gutterBottom>Nome</Typography>
          <Typography gutterBottom>Sobrenome</Typography>
          <Typography gutterBottom>Email</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(Review);