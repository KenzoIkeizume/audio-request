import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Instructions = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Instruções para preenchimento do formulário
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Typography>
            Para realizar nosso TCC necessitamos de bases de audio para treinar nosso modelo de aprendizado de máquina. 
            Com os audios fornecidos podemos fazer com que nossa inteligência artificial possa reconhecer se sua voz, ou
            de qualquer pessoa.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            Para que seja viável a leitura do audio, sugerimos que você grave sua voz em um ambiente sem ruído, com pouca
            interferência externa, eco e afins. Assim podemos treinar melhor nossa inteligência artificial.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Serão apenas 5 audios, cada um contendo uma mensagem diferente, deve se repetir a mensagem informada em tom natural,
            também deve ser preenchido nome, sobrenome e email, para que podemos diferenciar cada audio. Deve levar apenas 3 minutos
            para preencher todos os campos.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Instructions;