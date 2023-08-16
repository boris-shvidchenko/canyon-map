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
                    <form>
                        <section className='flex items-center w-56'>
                            <h3 className='text-white flex-1'>Technical</h3>
                            <div className='flex space-x-3'>
                                <section className='flex w-36 justify-around'>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                        <label htmlFor='' className='text-white'>2</label>
                                    </section>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                        <label htmlFor='' className='text-white'>3</label>
                                    </section>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                        <label htmlFor='' className='text-white'>4</label>
                                    </section>
                                </section>
                            </div>
                        </section>
                        <section className='flex items-center w-56'>
                            <h3 className='text-white flex-1'>Water</h3>
                            <div className='flex space-x-3'>
                                <section className='flex w-36 justify-around relative left-[1px]'>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                        <label htmlFor='' className='text-white'>A</label>
                                    </section>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                        <label htmlFor='' className='text-white'>B</label>
                                    </section>
                                    <section className='space-x-1 relative left-[1px]'>
                                        <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                        <label htmlFor='' className='text-white'>C</label>
                                    </section>
                                </section>
                            </div>
                        </section>
                        <section className='flex w-56'>
                            <h3 className='text-white flex-1'>Time</h3>
                            <div className='flex space-x-3'>
                                <div>
                                    <section className='flex w-36 justify-around relative left-[0.25rem]'>
                                        <section className='space-x-1 relative right-[4px]'>
                                            <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                            <label htmlFor='' className='text-white'>I</label>
                                        </section>
                                        <section className='space-x-1 relative'>
                                            <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                            <label htmlFor='' className='text-white'>II</label>
                                        </section>
                                        <section className='space-x-1'>
                                            <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                            <label htmlFor='' className='text-white'>III</label>
                                        </section>
                                    </section>
                                    <section className='flex w-36 justify-around relative left-[0.23rem]'>
                                        <section className='space-x-1 relative right-[0.1rem]'>
                                            <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                            <label htmlFor='' className='text-white'>IV</label>
                                        </section>
                                        <section className='space-x-1 relative right-[0.2rem]'>
                                            <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                            <label htmlFor='' className='text-white'>V</label>
                                        </section>
                                        <section className='space-x-1'>
                                            <input type='checkbox' id='' name='' value='' className='rounded-none' />
                                            <label htmlFor='' className='text-white'>VI</label>
                                        </section>
                                    </section>
                                </div>
                            </div>
                        </section>
                        {/* CLEAR BUTTON HERE */}
                    </form>
                </section>
            </div>
        </div>
    )

}