// Hooks
import { useContext } from 'react'
// Context
import { Context } from '../App'

export default function BasemapContainer() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    return (
        <div className='w-96 h-32 border border-black p-2 absolute bottom-7 left-4 flex space-x-2'>
            <section onClick={() => dispatch({ type: 'updateBasemap', basemap: 'arcgis-topographic'})} className='border border-black w-1/3 flex flex-col items-center overflow-hidden rounded-sm'>
                <img className='w-full h-full' src='/images/basemap-thumbnails/topo.png' alt='Topographic' />
                <p>Topographic</p>
            </section>
            <section onClick={() => dispatch({ type: 'updateBasemap', basemap: 'arcgis-imagery'})} className='border border-black w-1/3 flex flex-col items-center overflow-hidden rounded-sm'>
                <img className='w-full h-full' src='/images/basemap-thumbnails/imagery.png' alt='Imagery' />
                <p>Imagery</p>
            </section>
            <section onClick={() => dispatch({ type: 'updateBasemap', basemap: 'arcgis-streets-relief'})} className='border border-black w-1/3 flex flex-col items-center overflow-hidden rounded-sm'>
                <img className='w-full h-full' src='/images/basemap-thumbnails/streets.png' alt='Streets' />
                <p>Streets</p>
            </section>
        </div>
    )
}

