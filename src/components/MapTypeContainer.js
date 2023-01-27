export default function MapTypeContainer() {
    return (
        <div className='w-10 h-20 bg-[#40404080] absolute bottom-8 left-[16.75rem] p-1 rounded-sm flex flex-col justify-around'>
            <section className='bg-[#404040] text-white rounded-sm w-8 h-8 flex justify-center items-center cursor-pointer hover:text-[#ff6a00]'>
                <p className='text-lg font-semibold'>2D</p>
            </section>
            <section className='bg-[#404040] text-white rounded-sm w-8 h-8 flex justify-center items-center cursor-pointer hover:text-[#ff6a00]'>
            <p className='text-lg font-semibold'>3D</p>
            </section>
        </div>
    )
}