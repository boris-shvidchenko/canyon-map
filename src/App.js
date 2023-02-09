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
    contactFormData: {email: '', message: ''},
    contactFormVisible: false,
    isLoading: true,
    menuIconVisible: true,
    screenHeight: null,
    screenWidth: null,
    twoDimensional: true,
  }

  // Reducer hook setup
  const [state, dispatch] = useReducer(reducer, initialState);

  // Test
  console.log(state)

  // Reducer function setup
  function reducer(state, action) {
    switch (action.type) {
      case 'updateBasemap':
        return {...state, basemap: action.basemap}
      case 'updateLoading':
        return {...state, isLoading: action.isLoading}
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

  // Returns a Promise which resolves within 1 second. Used to show/hide the loader
  function trackLoading() {
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
  }

  useEffect(() => {
    // Resolves a promise. Removes the loader container from DOM if it exists, updates is loading state.  
    // Code was referenced from: https://lateeflab.com/display-a-loading-spinner-while-dom-is-rendering-in-reactjs/
    trackLoading().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        dispatch({type: 'updateLoading', isLoading: !state.isLoading});
      }
    });
    // Sets the width/height state to the current browser dimensions. Used for responsive UI design.
    // Code was referenced from: https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
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

  // If loading state is true, dont render the main content.
  if (state.isLoading) {
    return null;
  }

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


