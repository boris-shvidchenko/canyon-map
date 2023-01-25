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

            <div className={`${state.menuIconVisible && 'fixed top-0 -right-96'} ${!state.menuIconVisible && 'fixed top-0 right-0'} w-96 h-[30rem] bg-[#404040] z-10`}>
                <XMarkIcon onClick={toggleMenu} className='absolute top-7 right-7 w-9 h-9 cursor-pointer text-white hover:text-[#ff6a00]' />
            </div>
            
        </div>
    )
}