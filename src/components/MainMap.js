// Hooks
import { useContext, useEffect } from 'react';
// Context
import { Context } from '../state/appState';
// Functions
import { createMap, apiConfig } from '../functions/mapFunctions';

export default function MainMap() {

  // Obtain state from context
  const { state } = useContext(Context);

  useEffect(() => {
    apiConfig();
    createMap(state);
  }, [state.basemap, state.twoDimensional]);

  return (
    <div className='h-screen w-full'></div> 
  );
}