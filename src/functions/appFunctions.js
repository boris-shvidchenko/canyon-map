// Open/close menu
function toggleMenu(dispatch) {
    dispatch({ type: 'updateMenuIconVisibility' });
} 

// Open/close filter
function toggleFilter(dispatch) {
    dispatch({ type: 'updateFilterIconVisibility' });
}

// Open/close contact form
function toggleContact(dispatch) {
    dispatch({ type: 'updateContactFormVisibility' });
}

// Update filter selections
function updateFilter(event, list) {
    list.forEach(i => {
        if (i.current.id !== event.target.id) i.current.checked = false;
    });
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

// Clear filter
function clearFilter(state, dispatch, list) {
    if (!Object.values(state.filter).every(i => i === null)) {
        dispatch({ type: 'updateFilter', filter: {tech: null, water: null, time: null}});
    
        list.forEach(i => {
            if (i.current.checked) i.current.checked = false;
        })
    }
}

// Apply filter
function applyFilter(dispatch, list) {
    const techInput =  list[0].current.checked ? '2' : list[1].current.checked ? '3' : list[2].current.checked ? '4' : null;
    const waterInput = list[3].current.checked ? 'A' : list[4].current.checked ? 'B' : list[5].current.checked ? 'C' : null;
    const timeInput = list[6].current.checked ? 'I' : list[7].current.checked ? 'II' : list[8].current.checked ? 'III' : list[9].current.checked ? 'IV' : list[10].current.checked ? 'V' : list[11].current.checked ? 'VI' : null;
    if (techInput !== null || waterInput !== null || timeInput !== null) {
        dispatch({ type: 'updateFilter', filter: {tech: techInput, water: waterInput, time: timeInput}});
    }
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

export {
    toggleMenu,
    toggleFilter,
    toggleContact,
    updateFilter,
    updateContactFormData,
    clearFilter,
    applyFilter,
    submitForm,
    updateBasemap,
    changeMapType,
    trackLoading
}