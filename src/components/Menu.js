// Hooks
import { useContext } from 'react'
// Context
import { Context } from '../App'
// Heroicons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Menu() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Open/close menu
    function toggleMenu() {
        dispatch({ type: 'updateMenuIconVisibility' })
    } 

    // Open/close contact form
    function toggleContact() {
        dispatch({ type: 'updateContactFormVisibility' })
    }

    return (
        <div>
            <div className={`${!state.menuIconVisible && 'hidden'} menu-icon-container`}>
                <Bars3Icon onClick={toggleMenu} className='menu-icon' />
            </div>
            <div className={`${state.menuIconVisible && 'fixed top-0 -right-96'} ${!state.menuIconVisible && 'fixed top-0 right-0'} menu-container`}>
                {/* Header */}
                <section className='menu-header-section'>
                    <h1 className='menu-main-header'>Canyon Map</h1>
                    <XMarkIcon onClick={toggleMenu} className='menu-x' />
                </section>
                {/* About */}
                <section className='menu-text-section'>
                    <h2 className='menu-header'>About</h2>
                    <p className='menu-text'>This app attempts to display all known canyoneering routes around the world. Although the end goal is to maintain a map showing all canyons that have known descents, adding routes takes time, and thus some canyons may not be present.</p>
                </section>
                {/* Disclaimer */}
                <section className='menu-text-section'>
                    <h2 className='menu-header'>Disclaimer</h2>
                    <p className='menu-text'>The content on this map might not be accurate and is for informational purposes only and should not be used for navigation. Before attempting a canyon, make sure you have the necessary knowledge and training to do so.</p>
                </section>
                {/* Contact */}
                <section className='menu-text-section'>
                    <h2 className='menu-header'>Contact</h2>
                    <p className='menu-text'>Want to request a canyon to be added? Found a bug? Have suggestions for improvements? Get in touch!</p>
                </section>
                {/* Send message button */}
                <div onClick={toggleContact} className='menu-button'>Send a message</div>
                {/* Site info */}
                <section className='menu-info'>
                    <p>Developed by: Boris Shvidchenko</p>
                    <p>Last update: 01/27/2023</p>
                </section>
            </div>
        </div>
    )
}