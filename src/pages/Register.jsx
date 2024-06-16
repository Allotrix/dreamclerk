import React from 'react'

const Register = () => {
  return (
    <main className='font-mamun-font-secondary text-[white]'>
      <section className=' mx-auto w-full gap-4 flex flex-col  items-center justify-center h-[90vh]'>

        <h1 className='text-2xl'>Choose Registration Type</h1>
        
      <div className=" flex flex-wrap gap-3 px-4 md:px-32 justify-center items-center">
        <a className='flex justify-center min-w-min'>
            <button className="border-[1px] border-mamun-light-blue bg-transparent px-[60px] py-[20px] rounded-md flex items-center justify-center">
                Individual Registration
            </button>
        </a>
        <p className="mx-4">or</p>
        <a className='flex justify-center min-w-min'>
            <button className="border-[1px] border-mamun-light-blue bg-transparent px-[60px] py-[20px] rounded-md  flex items-center justify-center">
                Delegation Registration
            </button>
        </a>
    </div>
    

        
        </section>
    </main>
  )
}

export default Register