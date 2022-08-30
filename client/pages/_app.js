import '../styles/globals.css'
import DefaultLayout from "../layouts/DefaultLayout";
import {StyledEngineProvider} from "@mui/joy/styles";
import { deepmerge } from '@mui/utils';
import {    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import { extendTheme as extendJoyTheme } from '@mui/joy/styles';

const muiTheme = extendMuiTheme()
const joyTheme = extendJoyTheme()
const theme = deepmerge(muiTheme, joyTheme)

function MyApp({ Component, pageProps }) {
  return (
          <CssVarsProvider theme={theme}>
          <DefaultLayout>
                <Component {...pageProps} />
          </DefaultLayout>
              </CssVarsProvider>
      )
}

export default MyApp
