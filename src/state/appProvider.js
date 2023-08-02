// Context/State/Reducer
import reducer, { Context, initialState } from './appState';
// Hooks
import { useReducer, useEffect } from 'react';
// Functions
import { trackLoading, updateLoader, updateScreen } from '../functions/appFunctions';

export default function AppProvider({ children }) {

    // Reducer setup
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        trackLoading().then(updateLoader(dispatch, state));
        if (typeof window !== 'undefined') updateScreen(dispatch);  
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
