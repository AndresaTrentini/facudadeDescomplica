import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#44bc1d',
      main: '#a31884',
      dark: '#bf62a5',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    
    success: {
      light: '#67d759',
      main: '#2fbf30',
      dark: '#2fbf30',
      contrastText: '#FFF',
    },
    
  },




});



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <ListarTarefa />
      </ThemeProvider>
    </div>
  );
}

export default App;
