// Hooks
import { useContext } from 'react'
// Context
import { Context } from '../App'
// Heroicons
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function ContactForm() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Open/close contact form
    function toggleContact() {
        dispatch({ type: 'updateContactFormVisibility' })
    }

    return (
        <div>

            <div className={`${!state.contactFormVisible && 'fixed top-0 -right-96'} ${state.contactFormVisible && 'fixed top-0 right-0'} duration-100 ease-in-out w-96 h-[41.5rem] bg-[#404040] z-20 rounded-sm shadow-lg drop-shadow-md`}>

                {/* Header */}
                <section className='flex items-center w-full px-8 pb-5 pt-8 bg-[#303030] border-b border-[#8a8a8a]'>
                    <h1 className='text-[#ff6a00] text-xl font-semibold flex-1'>Contact</h1>
                    <ChevronRightIcon onClick={toggleContact} className='w-7 h-7 cursor-pointer text-white hover:text-[#ff6a00]' />
                </section>

                {/* About */}
                <section className='px-8 pt-4'>
                    <h2 className='text-[#fff] text-lg'>About</h2>
                    <p className='text-[#cfcfcf] py-1 text-sm font-light'>This app attempts to display all known canyoneering routes around the world. Although the end goal is to maintain a map showing all canyons that have known descents, adding routes takes time, and thus some canyons may not be present.</p>
                </section>

            
              

            </div>
            
        </div>
    )
}