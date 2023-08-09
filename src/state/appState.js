import { createContext } from 'react';

// Context
export const Context = createContext(); 

// Default state store 
export const initialState = {
    basemap: 'arcgis-topographic',
    contactFormData: {email: '', message: ''},
    contactFormVisible: false,
    isLoading: true,
    menuIconVisible: true,
    screenHeight: null,
    screenWidth: null,
    twoDimensional: true,
    // filter: {tech: null, water: null, time: null}
};

// Reducer function setup
export default function reducer(state, action) {
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