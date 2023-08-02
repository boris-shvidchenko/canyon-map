// Hooks
import { useContext, useRef } from 'react';
// Context
import { Context } from '../state/appState';
// Heroicons
import { ChevronRightIcon } from '@heroicons/react/24/solid';
// EmailJS
import emailjs from '@emailjs/browser';
// Functions
import { toggleContact, updateContactFormData, submitForm } from '../functions/appFunctions';

export default function ContactForm() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Reference to form for EmailJS
    const form = useRef();

    // Styles
    const contactFormNotVisible = !state.contactFormVisible && 'fixed top-0 -right-96';
    const contactFormVisible = state.contactFormVisible && 'fixed top-0 right-0';
    const width = state.screenWidth < 390 && 'w-screen h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';
    const height = state.screenHeight < 660 && 'h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#8a8a8a] pb-6';
    const btnMobile = state.screenWidth < 390 && 'mt-1';

    return (
        <div>
            <div className={`menu-container z-20 ${contactFormNotVisible} ${contactFormVisible} ${width} ${height}`}>
                {/* Header */}
                <section className='menu-header-section'>
                    <h1 className='menu-main-header'>Contact</h1>
                    <ChevronRightIcon onClick={() => toggleContact(dispatch)} className='menu-x' />
                </section>
                {/* Body */}
                <section className='menu-text-section'>
                    <p className='menu-text'>Reach out! Questions will be replied to as soon as possible.</p>
                    <p className='menu-text'>If reporting an issue or bug, please provide as much information as possible so that a fix can be implemented.</p>
                    <hr className='border-[#8a8a8a] my-4' />
                </section>
                {/* Form */}
                <form onSubmit={(e) => submitForm(e, emailjs, form, dispatch)} ref={form} className='contact-form-main'>
                    {/* Email address */}
                    <section className='contact-form-section'>
                        <label htmlFor='email' className='contact-form-label'>Email <span className='contact-form-span'>*</span></label>  
                        <input onChange={(e) => updateContactFormData(dispatch, state, e)} type='email' id='email' name='email' value={state.contactFormData.email} required className='contact-form-input' />
                    </section>
                    {/* Message */}
                    <section className='contact-form-section'>
                        <label htmlFor='message' className='contact-form-label'>Message <span className='contact-form-span'>*</span></label>  
                        <textarea onChange={(e) => updateContactFormData(dispatch, state, e)} type='text' id='message' name='message' value={state.contactFormData.message} required rows='10'   className='contact-form-input contact-form-scrollbar' />
                    </section>
                    {/* Submit Button */}
                    <section>
                        <button type='submit' className={`menu-button ml-0 mt-3 ${btnMobile}`}>Submit</button>
                    </section>
                </form>
            </div>
        </div>
    )
}