// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../App';

export default function MapTypeContainer() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Toggle between 2D/3D map
    function changeMapType(event) {
        event.target.textContent === '2D' ?
            dispatch({type: 'switchMapType', twoDimensional: true}):
            dispatch({type: 'switchMapType', twoDimensional: false});
    }

    return (
        <div className='w-10 h-20 bg-[#40404080] absolute bottom-8 left-[16.75rem] p-1 rounded-sm flex flex-col justify-around'>
            <section onClick={(e) => changeMapType(e)} className='bg-[#404040] text-white rounded-sm w-8 h-8 flex justify-center items-center cursor-pointer hover:text-[#ff6a00]'>
                <p className='text-lg font-semibold'>2D</p>
            </section>
            <section onClick={(e) => changeMapType(e)} className='bg-[#404040] text-white rounded-sm w-8 h-8 flex justify-center items-center cursor-pointer hover:text-[#ff6a00]'>
                <p className='text-lg font-semibold'>3D</p>
            </section>
        </div>
    )
}