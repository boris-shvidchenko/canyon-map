// Hooks
import { useContext, useRef } from 'react';
// Context
import { Context } from '../state/appState';
// Heroicons
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/solid';
// Functions
import { toggleFilter, updateFilter, clearFilter, applyFilter } from '../functions/appFunctions';

export default function Filter() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Styles
    const filterIcon = !state.filterIconVisible && 'hidden';
    const filterVisible = !state.filterIconVisible && 'fixed top-0 right-0';
    const filterNotVisible = state.filterIconVisible && 'fixed top-0 -right-96';
    const width = state.screenWidth < 390 && 'w-screen h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';
    const height = state.screenHeight < 660 && 'h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';
    const gridWidth = state.screenWidth > 300 && 'w-64';
    const gridSection = state.screenWidth < 300 ? 'space-x-1 flex' : 'space-x-2 flex';

    // Input references
    const [techFilter2, techFilter3, techFilter4] = [useRef(), useRef(), useRef()];
    const techInputs = [techFilter2, techFilter3, techFilter4];
    const [waterFilterA, waterFilterB, waterFilterC] = [useRef(), useRef(), useRef()];
    const waterInputs = [waterFilterA, waterFilterB, waterFilterC];
    const [timeFilterI, timeFilterII, timeFilterIII, timeFilterIV, timeFilterV, timeFilterVI] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const timeInputs = [timeFilterI, timeFilterII, timeFilterIII, timeFilterIV, timeFilterV, timeFilterVI];
    const filterInputs = [techFilter2, techFilter3, techFilter4, waterFilterA, waterFilterB, waterFilterC, timeFilterI, timeFilterII, timeFilterIII, timeFilterIV, timeFilterV, timeFilterVI];
    
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
                    <div className={`${gridWidth} filter-grid-div`}>
                        <h3 className='filter-grid-h3'>Technical</h3>
                        <section className={`${gridSection} col-start-3`}>
                            <input type='checkbox' id='two' className='filter-grid-input' onClick={(e) => updateFilter(e, techInputs)} ref={techFilter2} />
                            <label htmlFor='' className='filter-grid-label'>2</label>
                        </section>
                        <section className={`${gridSection}`}>
                            <input type='checkbox' id='three' className='filter-grid-input' onClick={(e) => updateFilter(e, techInputs)} ref={techFilter3} />
                            <label className='filter-grid-label'>3</label>
                        </section>
                        <section className={`${gridSection}`}>
                            <input type='checkbox' id='four' className='filter-grid-input' onClick={(e) => updateFilter(e, techInputs)} ref={techFilter4} />
                            <label className='filter-grid-label'>4</label>
                        </section>
                        <h3 className='filter-grid-h3'>Water</h3>
                        <section className={`${gridSection} col-start-3`}>
                            <input type='checkbox' id='A' className='filter-grid-input' onClick={(e) => updateFilter(e, waterInputs)} ref={waterFilterA}  />
                            <label className='filter-grid-label'>A</label>
                        </section>
                        <section className={`${gridSection}`}>
                            <input type='checkbox' id='B' className='filter-grid-input' onClick={(e) => updateFilter(e, waterInputs)} ref={waterFilterB}  />
                            <label className='filter-grid-label'>B</label>
                        </section>
                        <section className={`${gridSection}`}>
                            <input type='checkbox' id='C' className='filter-grid-input' onClick={(e) => updateFilter(e, waterInputs)} ref={waterFilterC}  />
                            <label className='filter-grid-label'>C</label>
                        </section>
                        <h3 className='filter-grid-h3'>Time</h3>
                        <section className={`${gridSection} col-start-3`}>
                            <input type='checkbox' id='I' className='filter-grid-input' onClick={(e) => updateFilter(e, timeInputs)} ref={timeFilterI}  />
                            <label className='filter-grid-label'>I</label>
                        </section>
                        <section className={`${gridSection}`}>
                            <input type='checkbox' id='II' className='filter-grid-input' onClick={(e) => updateFilter(e, timeInputs)} ref={timeFilterII}  />
                            <label className='filter-grid-label'>II</label>
                        </section>
                        <section className={`${gridSection}`}>
                            <input type='checkbox' id='III' className='filter-grid-input' onClick={(e) => updateFilter(e, timeInputs)} ref={timeFilterIII}  />
                            <label className='filter-grid-label'>III</label>
                        </section>
                        <section className={`${gridSection} col-start-3`}>
                            <input type='checkbox' id='IV' className='filter-grid-input' onClick={(e) => updateFilter(e, timeInputs)} ref={timeFilterIV}  />
                            <label className='filter-grid-label'>IV</label>
                        </section>
                        <section className={`${gridSection}`}>
                            <input type='checkbox' id='V' className='filter-grid-input' onClick={(e) => updateFilter(e, timeInputs)} ref={timeFilterV}  />
                            <label className='filter-grid-label'>V</label>
                        </section>
                        <section className={`${gridSection}`}>
                            <input type='checkbox' id='VI' className='filter-grid-input' onClick={(e) => updateFilter(e, timeInputs)} ref={timeFilterVI}  />
                            <label className='filter-grid-label'>VI</label>
                        </section>
                    </div>
                </section>
                <hr className='border-[#8a8a8a] mt-4 mx-8' />
                <section className='flex'>
                    <div onClick={() => applyFilter(filterInputs, state, dispatch)} className='menu-button px-3 py-1'>Apply</div>
                    <div onClick={() => clearFilter(filterInputs)} className='menu-button px-3 py-1 ml-4'>Clear</div>
                </section>
            </div>
        </div>
    )

}

// To Do:
// 1. Connect to state to apply filters to map, clear checks on select of 'Apply'
// 1b. BUG?: On apply, first click doesnt update state?
// 2. Optional: if options are selected and user closes window with 'X', deselect? <- this caused some bugs when initially tested.
// 3. On clear, update filter state to be as default to remove filter. Dont uncheck inputs (?), user can do that manually?
// 4. Double check filter component, make sure eveything is good before closing this section.
// 5. Move the default map location of Utah (on load) slightly up to accomodate mobile viewports and look better on desktop.