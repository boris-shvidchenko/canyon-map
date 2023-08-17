// Hooks
import { useContext, useRef } from 'react';
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

    // Input references
    const techFilter2 = useRef();
    const techFilter3 = useRef();
    const techFilter4 = useRef();
    const techFilterArray = [techFilter2, techFilter3, techFilter4];
    const waterFilterA = useRef();
    const waterFilterB = useRef();
    const waterFilterC = useRef();
    const waterFilterArray = [waterFilterA, waterFilterB, waterFilterC];
    const timeFilterI = useRef();
    const timeFilterII = useRef();
    const timeFilterIII = useRef();
    const timeFilterIV = useRef();
    const timeFilterV = useRef();
    const timeFilterVI = useRef();
    const timeFilterArray = [timeFilterI, timeFilterII, timeFilterIII, timeFilterIV, timeFilterV, timeFilterVI];

    function updateTechFilter(event, list) {
        list.forEach(i => {
            if (i.current.id !== event.target.id) i.current.checked = false;
        });
    }
    
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
                                        <input type='checkbox' id='two' className='rounded-none' onClick={(e) => updateTechFilter(e, techFilterArray)} ref={techFilter2} />
                                        <label htmlFor='' className='text-white'>2</label>
                                    </section>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='three' className='rounded-none' onClick={(e) => updateTechFilter(e, techFilterArray)} ref={techFilter3} />
                                        <label className='text-white'>3</label>
                                    </section>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='four' className='rounded-none' onClick={(e) => updateTechFilter(e, techFilterArray)} ref={techFilter4} />
                                        <label className='text-white'>4</label>
                                    </section>
                                </section>
                            </div>
                        </section>
                        <section className='flex items-center w-56'>
                            <h3 className='text-white flex-1'>Water</h3>
                            <div className='flex space-x-3'>
                                <section className='flex w-36 justify-around relative left-[1px]'>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='A' className='rounded-none' onClick={(e) => updateTechFilter(e, waterFilterArray)} ref={waterFilterA}  />
                                        <label className='text-white'>A</label>
                                    </section>
                                    <section className='space-x-1'>
                                        <input type='checkbox' id='B' className='rounded-none' onClick={(e) => updateTechFilter(e, waterFilterArray)} ref={waterFilterB}  />
                                        <label className='text-white'>B</label>
                                    </section>
                                    <section className='space-x-1 relative left-[1px]'>
                                        <input type='checkbox' id='C' className='rounded-none' onClick={(e) => updateTechFilter(e, waterFilterArray)} ref={waterFilterC}  />
                                        <label className='text-white'>C</label>
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
                                            <input type='checkbox' id='I' className='rounded-none' onClick={(e) => updateTechFilter(e, timeFilterArray)} ref={timeFilterI}  />
                                            <label className='text-white'>I</label>
                                        </section>
                                        <section className='space-x-1 relative'>
                                            <input type='checkbox' id='II' className='rounded-none' onClick={(e) => updateTechFilter(e, timeFilterArray)} ref={timeFilterII}  />
                                            <label className='text-white'>II</label>
                                        </section>
                                        <section className='space-x-1'>
                                            <input type='checkbox' id='III' className='rounded-none' onClick={(e) => updateTechFilter(e, timeFilterArray)} ref={timeFilterIII}  />
                                            <label className='text-white'>III</label>
                                        </section>
                                    </section>
                                    <section className='flex w-36 justify-around relative left-[0.23rem]'>
                                        <section className='space-x-1 relative right-[0.1rem]'>
                                            <input type='checkbox' id='IV' className='rounded-none' onClick={(e) => updateTechFilter(e, timeFilterArray)} ref={timeFilterIV}  />
                                            <label className='text-white'>IV</label>
                                        </section>
                                        <section className='space-x-1 relative right-[0.2rem]'>
                                            <input type='checkbox' id='V' className='rounded-none' onClick={(e) => updateTechFilter(e, timeFilterArray)} ref={timeFilterV}  />
                                            <label className='text-white'>V</label>
                                        </section>
                                        <section className='space-x-1'>
                                            <input type='checkbox' id='VI' className='rounded-none' onClick={(e) => updateTechFilter(e, timeFilterArray)} ref={timeFilterVI}  />
                                            <label className='text-white'>VI</label>
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

// To Do:
// 1. Try to remove number of lines where ref variables are defined, can I define them in a single row all at once?
// 2. Move functions to appFunctions.js
// 3. Add clear button.
// 4. Clean up form, find a better way to orient inputs to avoid individual adjustments, ex: left-[1rem](?)
// 5. Work on responsiveness and confirm styles look great for various screen sizes 
// 6. Finalize styles and move them to index.css as custom tailwind variables
// 7. Connect to state to apply filters to map