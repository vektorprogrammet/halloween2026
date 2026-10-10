import React from 'react'

const EndPage = () => {
  return (
    <>
        <section className="bg-linear-300/oklab from-[#000000] via-[#411710] to-[#E34F37] flex min-h-screen items-center justify-center">
            <div className='flex flex-col py-3 px-4 flex w-[400px]'>
                <div className="flex w-100 item-center justify-center">
                    
                </div>
                <div className="bg-[#17101f] border rounded-md px-4 py-2 item-center flex-col justify-center">
                    <p className='text-white font-creepster  text-4xl text-center'>Thanks for playing</p>
                    <p className='text-white font-creepster text-6xl text-center'><span className='text-[#FF7841]'>Happy</span> Halloween</p>
                    
                </div>
            </div>

        </section>
    </>
  )
}

export default EndPage