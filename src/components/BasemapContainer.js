// Hooks
import { useContext } from 'react';
// Context
// import { Context } from '../App';
import { Context } from '../state/appState';

export default function BasemapContainer() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Update the basemap state
    function updateBasemap(newBasemap) {
        dispatch({ type: 'updateBasemap', basemap: newBasemap});
    }

    // Styles
    const topoImgStyle = state.basemap === 'arcgis-topographic' ? 'border-2 border-[#ff6a00] hover:none' : 'border-2 border-transparent';
    const imageryImgStyle = state.basemap === 'arcgis-imagery' ? 'border-2 border-[#ff6a00] hover:none' : 'border-2 border-transparent';
    const streetsImgStyle = state.basemap === 'arcgis-streets-relief' ? 'border-2 border-[#ff6a00] hover:none' : 'border-2 border-transparent';

    return (
        <div className='basemap-container-main-div'>
            <section onClick={() => updateBasemap('arcgis-topographic')} className='basemap-container-section'>
                <img className={`w-full h-full ${topoImgStyle}`} src='/images/basemap-thumbnails/topo.png' alt='Topographic' />
                <p className='basemap-container-map-name'>Topo</p>
            </section>
            <section onClick={() => updateBasemap('arcgis-imagery')} className='basemap-container-section'>
                <img className={`w-full h-full ${imageryImgStyle}`} src='/images/basemap-thumbnails/imagery.png' alt='Imagery' />
                <p className='basemap-container-map-name'>Imagery</p>
            </section>
            <section onClick={() => updateBasemap('arcgis-streets-relief')} className='basemap-container-section'>
                <img className={`w-full h-full ${streetsImgStyle}`} src='/images/basemap-thumbnails/streets.png' alt='Streets' />
                <p className='basemap-container-map-name'>Streets</p>
            </section>
        </div>
    )
}

