// Components
import MainMap from './components/Map';
import BasemapContainer from './components/BasemapContainer';
import SideMenu from './components/SideMenu';
// Hooks
import { createContext, useReducer } from 'react';

// Context
export const Context = createContext(); 

export default function App() {

  // Default state store 
  const initialState = {
    basemap: 'arcgis-topographic',
    menuIconVisible: true
  }

  // Reducer hook setup
  const [state, dispatch] = useReducer(reducer, initialState);

  // Reducer function setup
  function reducer(state, action) {
    switch (action.type) {
      case 'updateBasemap':
        return {...state, basemap: action.basemap}
      case 'updateMenuIconVisibility':
        return {...state, menuIconVisible: !state.menuIconVisible}
    }
  }

  return (
    <Context.Provider value={{state, dispatch}}>
      <MainMap />
      <SideMenu />
      <BasemapContainer />
    </Context.Provider>
  );
}


