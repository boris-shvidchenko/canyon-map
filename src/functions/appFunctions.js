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

// Returns a Promise which resolves within 1 second. Used to show/hide the loader
function trackLoading() {
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
}

// Removes the loader container from DOM if it exists, updates is loading state. Code was referenced from: https://lateeflab.com/display-a-loading-spinner-while-dom-is-rendering-in-reactjs/
function updateLoader(dispatch, state) {
    const loaderElement = document.querySelector(".loader-container");
    if (loaderElement) {
        loaderElement.remove();
        dispatch({type: 'updateLoading', isLoading: !state.isLoading});
    }
}

// Sets the width/height state to the current browser dimensions. Used for responsive UI design. Code was referenced from: https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
function updateScreen(dispatch) {
    function handleResize() {
        dispatch({type: 'updateScreenWidth', screenWidth: window.innerWidth});
        dispatch({type: 'updateScreenHeight', screenHeight: window.innerHeight});
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
}

export {
    toggleMenu,
    toggleContact,
    updateContactFormData,
    submitForm,
    updateBasemap,
    changeMapType,
    trackLoading,
    updateLoader,
    updateScreen
}