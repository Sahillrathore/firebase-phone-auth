import React from 'react'

const Cards = () => {
    return (
        <div className='flex justify-center items-center flex-col pb-8'>
            <h1 className='text-4xl font-bold my-5'>Cards</h1>

            <div className='flex gap-6 flex-wrap justify-center '>
                <div className='card1 bg-white border border-zinc-300 rounded-md overflow-hidden w-64 shadow-sm hover:shadow-md transition-shadow'>
                    <div className='card-img'>
                        <img src="https://i0.wp.com/www.thewrap.com/wp-content/uploads/2021/04/avengers-face-off.jpg?fit=990%2C557&ssl=1" alt="" />
                    </div>
                    <div className='card-description pt-2 px-2'>
                        <h3 className='card-title text-xl font-semibold text-zinc-800'>Card Title</h3>
                        <p className='card-text text-sm text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem asperiores perspiciatis tenetur eius minus.</p>
                    </div>
                    <div className="card-actions px-2 pb-1">
                        <a href="#" className='font-semibold text-blue-600 '>Learn More</a>
                    </div>
                </div>

                <div className='card2 bg-white border border-zinc-300 rounded-md overflow-hidden w-64 shadow-md p-1 hover:shadow-lg transition-transform hover:scale-105'>
                    <div className='card-img'>
                        <img src="https://hips.hearstapps.com/seventeen/assets/16/12/1458835169-4071343-2895889394-the-a.jpg" alt="" className='rounded-md' />
                    </div>
                    <div className='card-description pt-2 px-2'>
                        <h3 className='card-title text-xl font-semibold text-zinc-800'>Card Title</h3>
                        <p className='card-text text-sm text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem asperiores perspiciatis tenetur eius minus.</p>
                    </div>
                    <div className="card-actions px-2 pb-1 flex justify-between">
                        <a href="#" className='font-semibold text-blue-600 '>Learn More</a>

                        <button className=' text-sm bg-blue-600 border border-transparent px-2 py-[2px] text-white hover:text-blue-600 hover:bg-transparent hover:border-blue-600 transition-colors rounded-md'>Click</button>
                    </div>
                </div>

                <div className='card3 bg-white border flex border-zinc-300 rounded-md overflow-hidden w-[35rem] h-56 shadow-md '>
                    <div className='card-img w-full'>
                        <img src="https://hips.hearstapps.com/seventeen/assets/16/12/1458835169-4071343-2895889394-the-a.jpg" alt="" className='rounded- w-full h-full' />
                    </div>

                    <div className='flex flex-col justify-center px-4'>
                        <div className='card-description py-4 '>
                            <h3 className='card-title text-xl font-semibold text-zinc-800 pb-3'>Card Title</h3>
                            <p className='card-text text-sm text-zinc-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem asperiores perspiciatis tenetur eius minus.</p>
                        </div>
                        <div className="card-actions  pb-1 flex gap-8">
                            <a href="#" className='font-semibold text-blue-600 '>Learn More</a>

                            <button className=' text-sm bg-blue-600 border border-transparent px-2 py-[2px] text-white hover:text-blue-600 hover:bg-transparent hover:border-blue-600 transition-colors rounded-md'>Click</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards