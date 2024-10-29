
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Routes from './router/Routes';
import { createTheme,ThemeProvider } from '@mui/material';
import './index.css'
import { globalTheme } from './utils/GlobalTheme';

// const theme = createTheme({
//   typography:{
//       fontFamily:"Poppins",
//   },
// })
const AppRoutes = () => {
  const element = useRoutes(Routes);
  return element;
}
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ThemeProvider theme={globalTheme}>
    <AppRoutes />
    </ThemeProvider>
  </BrowserRouter>,
)
