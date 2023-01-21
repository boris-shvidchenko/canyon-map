// Hooks
import { useContext } from 'react'
// Context
import { Context } from '../App'
// Heroicons
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function SideMenu() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Open/close menu
    function toggleMenu() {
        dispatch({ type: 'updateMenuIconVisibility' })
    } 

    return (
        <div>
            {state.menuIconVisible && 
                <div className='absolute top-6 right-6 bg-[#404040] p-1 rounded-sm'>
                    <Bars3Icon onClick={toggleMenu} className='w-9 h-9 cursor-pointer text-white hover:text-[#ff6a00]' />
                </div>
            }
        </div>
    )
}