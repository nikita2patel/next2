import '../styles/globals.css'
import {Provider} from 'react-redux';
import {store} from './Redux/Store'


function MyApp({ Component, pageProps }){

  return (
    <>
    <Provider store={store}>
     <center>
       <Component {...pageProps}/>
      </center>
      </Provider>
    
    </>
  )
}

export default MyApp
