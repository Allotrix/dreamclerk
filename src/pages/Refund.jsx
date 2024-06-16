import React from 'react';

const RefundPolicy = () => {
  return (
    <section className='text-[white] flex flex-col items-center py-24 md:mt-0 px-6 gap-10 md:items-start text-left md:px-32 md:gap-4 md:pt-48'>
        <div className='font-allotrix-font-secondary w-full text-center mt-16 md:mt-0'>
            <h1 className='font-bold text-3xl md:text-4xl md:mb-10 px-2'>
                Refund Policy
            </h1>
        </div>
        <div className='md:w-[750px] mx-auto font-allotrix-font-secondary flex flex-col gap-6'>
            <h3 className='text-xl font-bold'>Introduction</h3>
            <p>
              This Refund Policy ("Policy") sets forth the conditions under which refunds are processed by Madras MUN ("We", "Us"). This Policy applies to all participants ("You", "Your") of the Madras MUN services and events. By registering for our events, you agree to the terms and conditions stipulated in this Policy.
            </p>
            <ol className='flex flex-col gap-4 list-decimal pl-4'>
              <li>
                <h3 className='font-bold'>No Refund Policy</h3>
                <p>
                  Madras MUN does not offer refunds for any payments made for registration, participation, or any related services. All sales are final and non-refundable.
                </p>
              </li>
              <li>
                <h3 className='font-bold'>Exceptional Circumstances</h3>
                <p>
                  In exceptional cases where a refund may be considered, the decision will be at the sole discretion of Madras MUN. Such cases are rare and will be evaluated on an individual basis.
                </p>
              </li>
              <li>
                <h3 className='font-bold'>Contact for Queries</h3>
                <p>
                  For any questions related to this Refund Policy, please reach out to us at <a href="mailto:madrasmun@gmail.com" className="text-blue-500">madrasmun@gmail.com</a>.
                </p>
              </li>
            </ol>
        </div>
    </section>
  )
}

export default RefundPolicy;
