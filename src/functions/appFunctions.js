// Open/close menu
function toggleMenu(dispatch) {
    dispatch({ type: 'updateMenuIconVisibility' });
} 

// Open/close contact form
function toggleContact(dispatch) {
    dispatch({ type: 'updateContactFormVisibility' });
}

// Update contact form data
function updateContactFormData(dispatch, state, event) {
    dispatch({ 
        type: 'updateContactFormData', 
        contactFormData: {
            ...state.contactFormData,
            [event.target.name]: event.target.value
        }
    });
}

// Submit form
function submitForm(event, emailjs, form, dispatch) {
    event.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then(() => {
            console.log('Message sent');
        }, (error) => {
            console.log(error.text);
        })
        .then(dispatch({ type: 'updateContactFormData', contactFormData: {email: '', message: ''} }));
}

// Update the basemap state
function updateBasemap(newBasemap, dispatch) {
    dispatch({ type: 'updateBasemap', basemap: newBasemap});
}

// Toggle between 2D/3D map
function changeMapType(event, dispatch) {
    event.target.textContent === '2D' ?
        dispatch({type: 'switchMapType', twoDimensional: true}):
        dispatch({type: 'switchMapType', twoDimensional: false});
}

export {
    toggleMenu,
    toggleContact,
    updateContactFormData,
    submitForm,
    updateBasemap,
    changeMapType
}