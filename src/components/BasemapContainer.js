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
        <div className='w-60 h-20 border border-[#404040] absolute bottom-7 left-4 flex rounded-sm over'>
            <section onClick={() => updateBasemap('arcgis-topographic')} className='w-1/3 p-1 bg-[#d97706] flex flex-col items-center overflow-hidden cursor-pointer'>
                <img className='w-full h-full' src='/images/basemap-thumbnails/topo.png' alt='Topographic' />
                {/* <p>Topographic</p> */}
            </section>
            <section onClick={() => updateBasemap('arcgis-imagery')} className='w-1/3 p-1 bg-[#404040] flex flex-col items-center overflow-hidden cursor-pointer'>
                <img className='w-full h-full' src='/images/basemap-thumbnails/imagery.png' alt='Imagery' />
                {/* <p>Imagery</p> */}
            </section>
            <section onClick={() => updateBasemap('arcgis-streets-relief')} className='w-1/3 p-1 bg-[#404040] flex flex-col items-center overflow-hidden cursor-pointer'>
                <img className='w-full h-full' src='/images/basemap-thumbnails/streets.png' alt='Streets' />
                {/* <p>Streets</p> */}
            </section>
        </div>
    )
}

