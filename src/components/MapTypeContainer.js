// Hooks
import { useContext } from 'react';
// Context
// import { Context } from '../App';
import { Context } from '../state/appState';

export default function MapTypeContainer() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Toggle between 2D/3D map
    function changeMapType(event) {
        event.target.textContent === '2D' ?
            dispatch({type: 'switchMapType', twoDimensional: true}):
            dispatch({type: 'switchMapType', twoDimensional: false});
    }

    // Styles
    const mainDivStyle = state.screenWidth < 320 ? 'w-20 h-11 bottom-[7.75rem] left-4' : 'w-11 h-20 bottom-8 left-[16.75rem] flex-col';

    return (
        <div className={`${mainDivStyle} map-type-container-main`}>
            <section onClick={(e) => changeMapType(e)} className={`map-type-container-section ${state.twoDimensional && 'text-[#ff6a00]'}`}>
                <p>2D</p>
            </section>
            <section onClick={(e) => changeMapType(e)} className={`map-type-container-section ${!state.twoDimensional && 'text-[#ff6a00]'}`}>
                <p>3D</p>
            </section>
        </div>
    )
}