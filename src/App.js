// Components
import MainMap from './components/Map';
import BasemapContainer from './components/BasemapContainer';
import MapTypeContainer from './components/MapTypeContainer';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
// Hooks
import { createContext, useReducer } from 'react';

// Context
export const Context = createContext(); 

export default function App() {

  // Default state store 
  const initialState = {
    basemap: 'arcgis-topographic',
    menuIconVisible: true,
    contactFormVisible: false,
    contactFormData: {email: '', message: '', attachments: []}
  }

  // Reducer hook setup
  const [state, dispatch] = useReducer(reducer, initialState);

  // Test
  console.log(state.contactFormData)

  // Reducer function setup
  function reducer(state, action) {
    switch (action.type) {
      case 'updateBasemap':
        return {...state, basemap: action.basemap}
      case 'updateMenuIconVisibility':
        return {...state, menuIconVisible: !state.menuIconVisible}
      case 'updateContactFormVisibility':
        return {...state, contactFormVisible: !state.contactFormVisible}
      case 'updateContactFormData':
        return {...state, contactFormData: action.contactFormData}
    }
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


