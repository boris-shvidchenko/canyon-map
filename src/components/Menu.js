// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../state/appState';
// Heroicons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// Functions
import { toggleMenu, toggleContact } from '../functions/appFunctions';

export default function Menu() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Styles
    const menuIcon = !state.menuIconVisible && 'hidden';
    const menuVisible = !state.menuIconVisible && 'fixed top-0 right-0';
    const menuNotVisible = state.menuIconVisible && 'fixed top-0 -right-96';
    const width = state.screenWidth < 390 && 'w-screen h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';
    const height = state.screenHeight < 660 && 'h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';
    const padding = state.screenWidth < 390 && 'pt-3';
    const btnMobile = state.screenWidth < 390 && 'mt-3';
    const infoMobile = state.screenWidth < 390 && 'pt-3 text-[0.70rem] space-y-0';

    return (
        <div>
            <div className={`${menuIcon} menu-icon-container`}>
                <Bars3Icon onClick={() => toggleMenu(dispatch)} className='menu-icon' />
            </div>
            <div className={`menu-container ${menuNotVisible} ${menuVisible} ${width} ${height}`}>
                {/* Header */}
                <section className='menu-header-section'>
                    <h1 className='menu-main-header'>Canyon Map</h1>
                    <XMarkIcon onClick={() => toggleMenu(dispatch)} className='menu-x' />
                </section>
                {/* About */}
                <section className={`menu-text-section ${padding}`}>
                    <h2 className='menu-header'>About</h2>
                    <p className='menu-text'>This app attempts to display known canyoneering routes. The end goal is to maintain a map showing all canyons that have recorded descents; however, adding routes takes time and thus some canyons might not be currently displayed.</p>
                </section>
                {/* Disclaimer */}
                <section className={`menu-text-section ${padding}`}>
                    <h2 className='menu-header'>Disclaimer</h2>
                    <p className='menu-text'>The content on this map might not be accurate and is for informational purposes only and should not be used for navigation. Before attempting a canyon, make sure you have the necessary knowledge and training to do so.</p>
                </section>
                {/* Contact */}
                <section className={`menu-text-section ${padding}`}>
                    <h2 className='menu-header'>Contact</h2>
                    <p className='menu-text'>Spotted an error? Found a bug? Have suggestions for improvements? Get in touch!</p>
                </section>
                {/* Send message button */}
                <div onClick={() => toggleContact(dispatch)} className={`menu-button ${btnMobile}`}>Send a message</div>
                {/* Site info */}
                <section className={`menu-info ${infoMobile}`}>
                    <p>Developed by: Boris Shvidchenko</p>
                    <p>Last update: 10/24/2023</p>
                </section>
            </div>
        </div>
    )
}