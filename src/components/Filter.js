// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../state/appState';
// Heroicons
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/solid';
// Functions
import { toggleFilter } from '../functions/appFunctions';

export default function Filter() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Styles
    const filterVisible = !state.filterIconVisible && 'fixed top-0 right-0';
    const filterNotVisible = state.filterIconVisible && 'fixed top-0 -right-96';
    const width = state.screenWidth < 390 && 'w-screen h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';
    const height = state.screenHeight < 660 && 'h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';

    return (
        <div>
            <div onClick={() => toggleFilter(dispatch)} className={`filter-icon-container`}>
                <FunnelIcon className='filter-icon' />
            </div>
            <div className={`menu-container ${filterNotVisible} ${filterVisible} ${width} ${height}`}>
                <XMarkIcon onClick={() => toggleFilter(dispatch)} className='menu-x' />
                <p className='text-white'>Filter options here...</p>
            </div>
        </div>
    )

}