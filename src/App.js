
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Store from './Utilis/ReduxStore/Store';

function App() {
  return (
    
    <Provider store={Store}>
         <div className=" ">
        <Head/>
        <Body/>
    </div>
    </Provider>
 
  );
}

export default App;
