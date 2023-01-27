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

    // Submit form
    function submitForm(event) {
        event.preventDefault();
    }

    return (
        <div>

            <div className={`${!state.contactFormVisible && 'fixed top-0 -right-96'} ${state.contactFormVisible && 'fixed top-0 right-0'} duration-100 ease-in-out w-96 h-[41.5rem] bg-[#404040] z-20 rounded-sm shadow-lg drop-shadow-md`}>

                {/* Header */}
                <section className='flex items-center w-full px-8 pb-5 pt-8 bg-[#303030] border-b border-[#8a8a8a]'>
                    <h1 className='text-[#ff6a00] text-xl font-semibold flex-1'>Contact</h1>
                    <ChevronRightIcon onClick={toggleContact} className='w-7 h-7 cursor-pointer text-white hover:text-[#ff6a00]' />
                </section>

                {/* Contact */}
                <section className='px-8 pt-4'>
                    <p className='text-[#cfcfcf] py-1 text-sm font-light'>If you'd like to have a new canyon added please include the name and the rating in the message below. A description of where the canyon is located would be helpful as well (or better yet, attach a map!). Feel free to include an image to use for the preview.</p>
                    <hr className='border-[#8a8a8a] my-4' />
                </section>

                {/* Form */}
                <form onSubmit={(e) => submitForm(e)} className='px-8 space-y-4'>
                    {/* Email address */}
                    <section className='flex flex-col space-y-1'>
                        <label htmlFor='email' className='text-[#fff] text-sm'>Email <span className='text-[#f72b2b]'>*</span></label>  
                        <input type='email' id='email' name='email' required className='border-none rounded-sm bg-[#afafaf] py-1 px-2 focus:outline-none text-sm' />
                    </section>
                    {/* Message */}
                    <section className='flex flex-col space-y-1'>
                        <label htmlFor='message' className='text-[#fff] text-sm'>Message <span className='text-[#f72b2b]'>*</span></label>  
                        <textarea type='message' id='message' name='message' required rows='5'   className='border-none rounded-sm bg-[#afafaf] py-1 px-2 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-[#8a8a8a] text-sm' />
                    </section>
                    {/* Attachments */}
                    <section className='flex flex-col space-y-1'>
                        <label htmlFor='attachment' className='text-[#fff] text-sm'>Attachments (PNG or JPG please)
                        </label>
                        <input type='file' id='attachment' name='attachment' multiple className='text-[#cfcfcf]' />
                    </section>
                    {/* Disclaimer */}
                    <section className='text-xs text-[#9b9b9b]'>
                        <p>Please note: By adding images you give permission for them to be used on this website.</p>
                    </section>
                    {/* Submit Button */}
                    <section>
                        <button type='submit' className='menu-button ml-0 mt-0'>Submit</button>
                    </section>
                </form>
            </div>
        </div>
    )
}