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

    return (
        <div>

            <div className={`${!state.menuIconVisible && 'hidden'} absolute top-6 right-6 bg-[#404040] p-1 rounded-sm`}>
                <Bars3Icon onClick={toggleMenu} className='w-9 h-9 cursor-pointer text-white hover:text-[#ff6a00]' />
            </div>

            <div className={`${state.menuIconVisible && 'fixed top-0 -right-96'} ${!state.menuIconVisible && 'fixed top-0 right-0'} duration-100 ease-in-out w-96 h-[39rem] bg-[#404040] z-10 rounded-sm`}>

                {/* Header */}
                <section className='flex items-center w-full px-8 pb-5 pt-8 bg-[#303030] border-b border-[#8a8a8a]'>
                    <h1 className='text-[#ff6a00] text-xl font-semibold flex-1'>Canyon Map</h1>
                    <XMarkIcon onClick={toggleMenu} className='w-7 h-7 cursor-pointer text-white hover:text-[#ff6a00]' />
                </section>

                {/* About */}
                <section className='px-8 pt-4'>
                    <h2 className='text-[#fff] text-lg'>About</h2>
                    <p className='text-[#cfcfcf] py-1 text-sm font-light'>This app attempts to display all known canyoneering routes around the world. Although the end goal is to maintain a map showing all canyons that have known descents, adding routes takes time, and thus some canyons may not be present.</p>
                </section>

                {/* Disclaimer */}
                <section className='px-8 pt-4'>
                    <h2 className='text-[#fff] text-lg'>Disclaimer</h2>
                    <p className='text-[#cfcfcf] py-1 text-sm font-light'>The content on this map might not be accurate and is for informational purposes only and should not be used for navigation. Before attempting a canyon, make sure you have the necessary knowledge and training to do so.</p>
                </section>

                {/* Contact */}
                <section className='px-8 pt-4'>
                    <h2 className='text-[#fff] text-lg'>Contact</h2>
                    <p className='text-[#cfcfcf] py-1 text-sm font-light'>Want to request a canyon to be added? Found a bug? Have suggestions for improvements? Get in touch!</p>
                </section>
                
                <div className='ml-8 mt-5 px-5 py-2 text-[#ff6a00] border border-[#ff6a00] rounded-sm w-max cursor-pointer hover:outline hover:outline-1'>Send a message</div>

            </div>
            
        </div>
    )
}