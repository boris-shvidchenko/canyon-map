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
    const filterIcon = !state.filterIconVisible && 'hidden';
    const filterVisible = !state.filterIconVisible && 'fixed top-0 right-0';
    const filterNotVisible = state.filterIconVisible && 'fixed top-0 -right-96';
    const width = state.screenWidth < 390 && 'w-screen h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';
    const height = state.screenHeight < 660 && 'h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';

    return (
        <div>
            <div onClick={() => toggleFilter(dispatch)} className={`${filterIcon} filter-icon-container`}>
                <FunnelIcon className='filter-icon' />
            </div>
            <div className={`filter-container ${filterNotVisible} ${filterVisible} ${width} ${height}`}>
                <section className='filter-container-section'>
                    <p className='text-[#ff6a00]'>Add Filter</p>
                    <XMarkIcon onClick={() => toggleFilter(dispatch)} className='menu-x' />
                </section>
            </div>
        </div>
    )

}