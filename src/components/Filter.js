// Hooks
import { useContext, useRef } from 'react';
// Context
import { Context } from '../state/appState';
// Heroicons
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/solid';
// Functions
import { toggleFilter, updateFilter } from '../functions/appFunctions';

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
    const [techFilter2, techFilter3, techFilter4] = [useRef(), useRef(), useRef()];
    const techFilterArray = [techFilter2, techFilter3, techFilter4];
    const [waterFilterA, waterFilterB, waterFilterC] = [useRef(), useRef(), useRef()];
    const waterFilterArray = [waterFilterA, waterFilterB, waterFilterC];
    const [timeFilterI, timeFilterII, timeFilterIII, timeFilterIV, timeFilterV, timeFilterVI] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const timeFilterArray = [timeFilterI, timeFilterII, timeFilterIII, timeFilterIV, timeFilterV, timeFilterVI];
    
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
                <section className='ml-8 pt-4'>
                    <p className='menu-text'>Search canyons by their ratings:</p>
                    <div className={`grid grid-cols-5 gap-1 ${state.screenWidth < 300 ? '' : 'w-64'} pt-2`}>
                        <h3 className='text-[#fff] text-sm'>Technical</h3>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex col-start-3`}>
                            <input type='checkbox' id='two' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, techFilterArray)} ref={techFilter2} />
                            <label htmlFor='' className='text-[#cfcfcf] text-sm'>2</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex`}>
                            <input type='checkbox' id='three' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, techFilterArray)} ref={techFilter3} />
                            <label className='text-[#cfcfcf] text-sm'>3</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex`}>
                            <input type='checkbox' id='four' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, techFilterArray)} ref={techFilter4} />
                            <label className='text-[#cfcfcf] text-sm'>4</label>
                        </section>
                        <h3 className='text-[#fff] text-sm'>Water</h3>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex col-start-3`}>
                            <input type='checkbox' id='A' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, waterFilterArray)} ref={waterFilterA}  />
                            <label className='text-[#cfcfcf] text-sm'>A</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex`}>
                            <input type='checkbox' id='B' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, waterFilterArray)} ref={waterFilterB}  />
                            <label className='text-[#cfcfcf] text-sm'>B</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex`}>
                            <input type='checkbox' id='C' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, waterFilterArray)} ref={waterFilterC}  />
                            <label className='text-[#cfcfcf] text-sm'>C</label>
                        </section>
                        <h3 className='text-[#fff] text-sm'>Time</h3>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex col-start-3`}>
                            <input type='checkbox' id='I' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, timeFilterArray)} ref={timeFilterI}  />
                            <label className='text-[#cfcfcf] text-sm'>I</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex`}>
                            <input type='checkbox' id='II' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, timeFilterArray)} ref={timeFilterII}  />
                            <label className='text-[#cfcfcf] text-sm'>II</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex`}>
                            <input type='checkbox' id='III' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, timeFilterArray)} ref={timeFilterIII}  />
                            <label className='text-[#cfcfcf] text-sm'>III</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex col-start-3`}>
                            <input type='checkbox' id='IV' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, timeFilterArray)} ref={timeFilterIV}  />
                            <label className='text-[#cfcfcf] text-sm'>IV</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex`}>
                            <input type='checkbox' id='V' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, timeFilterArray)} ref={timeFilterV}  />
                            <label className='text-[#cfcfcf] text-sm'>V</label>
                        </section>
                        <section className={`${state.screenWidth < 300 ? 'space-x-1' : 'space-x-2'} flex`}>
                            <input type='checkbox' id='VI' className='cursor-pointer accent-[#ff6a00]' onClick={(e) => updateFilter(e, timeFilterArray)} ref={timeFilterVI}  />
                            <label className='text-[#cfcfcf] text-sm'>VI</label>
                        </section>
                    </div>
                </section>
                <hr className='border-[#8a8a8a] mt-4 mx-8' />
                <section className='flex'>
                    <div className='menu-button px-3 py-1'>Apply</div>
                    <div className='menu-button px-3 py-1 ml-4'>Clear</div>
                </section>
            </div>
        </div>
    )

}

// To Do:
// 6. Finalize styles and move them to index.css as custom tailwind variables
// 7. Connect to state to apply filters to map