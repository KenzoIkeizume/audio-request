import React from 'react';
import Checkout from './components/Checkout/Checkout';
import { SnackbarProvider, withSnackbar } from 'notistack';

function Provider(props) {
  console.log(props)
  return (
    <div className="App">
      <Checkout {...props}/>
    </div>
  );
}

const MyApp = withSnackbar(Provider);

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}

export default App;
