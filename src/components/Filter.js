// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../state/appState';
// Heroicons
import { FunnelIcon } from '@heroicons/react/24/solid';
// Functions

export default function Filter() {

    // Obtain state from context
    const { state, dispatch } = useContext(Context);

    // Styles

    return (
        <div>
            <div className={`filter-icon-container`}>
                <FunnelIcon className='filter-icon' />
            </div>
        </div>
    )

}