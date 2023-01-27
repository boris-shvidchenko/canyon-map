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
            <div className={`${!state.contactFormVisible && 'fixed top-0 -right-96'} ${state.contactFormVisible && 'fixed top-0 right-0'} menu-container z-20`}>
                {/* Header */}
                <section className='menu-header-section'>
                    <h1 className='menu-main-header'>Contact</h1>
                    <ChevronRightIcon onClick={toggleContact} className='menu-x' />
                </section>
                {/* Body */}
                <section className='menu-text-section'>
                    <p className='menu-text'>If you'd like to have a new canyon added please include the name and the rating in the message below. A description of where the canyon is located would be helpful as well (or better yet, attach a map!). Feel free to include an image to use for the preview.</p>
                    <hr className='border-[#8a8a8a] my-4' />
                </section>
                {/* Form */}
                <form onSubmit={(e) => submitForm(e)} className='contact-form-main'>
                    {/* Email address */}
                    <section className='contact-form-section'>
                        <label htmlFor='email' className='contact-form-label'>Email <span className='contact-form-span'>*</span></label>  
                        <input type='email' id='email' name='email' required className='contact-form-input' />
                    </section>
                    {/* Message */}
                    <section className='contact-form-section'>
                        <label htmlFor='message' className='contact-form-label'>Message <span className='contact-form-span'>*</span></label>  
                        <textarea type='message' id='message' name='message' required rows='5'   className='contact-form-input contact-form-scrollbar' />
                    </section>
                    {/* Attachments */}
                    <section className='contact-form-section'>
                        <label htmlFor='attachment' className='contact-form-label'>Attachments (PNG or JPG please)
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