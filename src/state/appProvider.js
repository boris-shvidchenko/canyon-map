// Context/State/Reducer
import reducer, { Context, initialState } from './appState';
// Hooks
import { useReducer, useEffect } from 'react';

export default function AppProvider({ children }) {

    // Reducer setup
    const [state, dispatch] = useReducer(reducer, initialState);

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
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    )
}
