// Hooks
import { useContext } from 'react'
// Context
import { Context } from '../App'
// Heroicons
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function SideMenu() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    return (
        <>
            <div className='absolute top-6 right-6 bg-[#404040] p-1 rounded-sm'>
                <Bars3Icon className='w-9 h-9 cursor-pointer text-white hover:text-[#ff6a00]' />
            </div>
        </>
    )
}