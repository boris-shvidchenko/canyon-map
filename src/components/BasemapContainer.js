// Hooks
import { useContext } from 'react'
// Context
import { Context } from '../App'

export default function BasemapContainer() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Updates the basemap state
    function updateBasemap(newBasemap) {
        dispatch({ type: 'updateBasemap', basemap: newBasemap})
    }

    return (
        <div className='w-60 h-20 bg-[#40404080] absolute bottom-7 left-4 flex space-x-2 p-2 rounded-sm'>
            <section onClick={() => updateBasemap('arcgis-topographic')} className='w-1/3 flex flex-col items-center overflow-auto cursor-pointer'>
                <img className={`w-full h-full ${state.basemap === 'arcgis-topographic' ? 'border-2 border-red-500 hover:none' : 'border-2 border-transparent hover:border-[#ff6a00]'}`} src='/images/basemap-thumbnails/topo.png' alt='Topographic' />
                <p className='absolute -bottom-1 px-1 bg-[#404040] w-[3.85rem] text-center rounded-sm text-white font-semibold text-sm'>Topo</p>
            </section>
            <section onClick={() => updateBasemap('arcgis-imagery')} className='w-1/3 flex flex-col items-center overflow-hidden cursor-pointer'>
                <img className={`w-full h-full ${state.basemap === 'arcgis-imagery' ? 'border-2 border-red-500 hover:border-red-500' : 'border-2 border-transparent hover:border-[#ff6a00]'}`} src='/images/basemap-thumbnails/imagery.png' alt='Imagery' />
                <p className='absolute -bottom-1 px-1 bg-[#404040] w-[3.85rem] text-center rounded-sm text-white font-semibold text-sm'>Imagery</p>
            </section>
            <section onClick={() => updateBasemap('arcgis-streets-relief')} className='w-1/3 flex flex-col items-center overflow-hidden cursor-pointer'>
                <img className={`w-full h-full ${state.basemap === 'arcgis-streets-relief' ? 'border-2 border-red-500 hover:border-red-500' : 'border-2 border-transparent hover:border-[#ff6a00]'}`} src='/images/basemap-thumbnails/streets.png' alt='Streets' />
                <p className='absolute -bottom-1 px-1 bg-[#404040] w-[3.85rem] text-center rounded-sm text-white font-semibold text-sm'>Streets</p>
            </section>
        </div>
    )
}

