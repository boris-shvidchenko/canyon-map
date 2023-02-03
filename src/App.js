// Components
import MainMap from './components/Map';
import BasemapContainer from './components/BasemapContainer';
import MapTypeContainer from './components/MapTypeContainer';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
// Hooks
import { createContext, useReducer, useEffect } from 'react';

// Context
export const Context = createContext(); 

export default function App() {

  // Default state store 
  const initialState = {
    basemap: 'arcgis-topographic',
    twoDimensional: true,
    menuIconVisible: true,
    contactFormVisible: false,
    contactFormData: {email: '', message: '', attachments: []},
    screenWidth: null,
    screenHeight: null,
  }

  // Reducer hook setup
  const [state, dispatch] = useReducer(reducer, initialState);

  // Test
  // console.log(state)

  // Reducer function setup
  function reducer(state, action) {
    switch (action.type) {
      case 'updateBasemap':
        return {...state, basemap: action.basemap}
      case 'switchMapType':
        return {...state, twoDimensional: action.twoDimensional}
      case 'updateMenuIconVisibility':
        return {...state, menuIconVisible: !state.menuIconVisible}
      case 'updateContactFormVisibility':
        return {...state, contactFormVisible: !state.contactFormVisible}
      case 'updateContactFormData':
        return {...state, contactFormData: action.contactFormData}
      case 'updateScreenWidth':
        return {...state, screenWidth: action.screenWidth}
      case 'updateScreenHeight':
        return {...state, screenHeight: action.screenHeight}
    }
  }

  // Sets the screenWidth state to the current browser width. This is used in order to render components based on whether mobile view is used or not.
  // The code in the useEffect hook was referenced from the following source: https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        dispatch({type: 'updateScreenWidth', screenWidth: window.innerWidth});
        dispatch({type: 'updateScreenHeight', screenHeight: window.innerHeight});
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Context.Provider value={{state, dispatch}}>
      <MainMap />
      <Menu />
      <ContactForm />
      <BasemapContainer />
      <MapTypeContainer />
    </Context.Provider>
  );
}


