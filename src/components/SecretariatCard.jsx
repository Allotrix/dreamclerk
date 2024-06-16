import React from 'react';

const SecretariatCard = ({ name, designation, description, img }) => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-5 md:gap-24 md:max-w-[65%] px-8 mx-auto my-20'>
        <article className='flex flex-col gap-3 md:w-[70%]'>
            <h4 className='text-4xl font-bold'>
                {name}
            </h4>
            <h5 className='gradient-heading text-xl font-bold'>
                {designation}
            </h5>
            <p className='text-xl text-justify'>
                {description}
            </p>
        </article>
        <img className='md:w-[35%] min-h-full rounded-md object-cover' src={img} alt="Executive" />
    </div>
  )
}

export default SecretariatCard;
