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
                <section>
                    <p className='menu-text'>Search canyons by ratings:</p>
                    <form className=''>
                        <section className='flex items-center space-x-5'>
                            <h3 className='text-white'>Technichal</h3>
                            <div className='flex space-x-3'>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>2</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>3</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>4</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                            </div>
                        </section>
                        <section className='flex items-center space-x-5'>
                            <h3 className='text-white'>Water</h3>
                            <div  className='flex space-x-3'>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>A</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>B</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>C</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                            </div>
                        </section>
                        <section className='flex items-center space-x-5'>
                            <h3 className='text-white'>Time</h3>
                            <div  className='flex space-x-3'>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>I</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>II</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>III</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>IV</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>V</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                                <section className='space-x-1'>
                                    <label htmlFor='' className='text-white'>VI</label>
                                    <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                </section>
                            </div>
                        </section>
                        {/* CLEAR BUTTON HERE */}
                    </form>
                </section>
            </div>
        </div>
    )

}