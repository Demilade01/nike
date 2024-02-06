import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='offer'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className='text-coral-red'> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into Style: Unwrap Extraordinary Deals on Nike's Special Offer Shoes – Elevate Your Comfort, Performance, and Fashion Game with Exclusive Savings. Limited-Time Offers Await Your Stride!
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Discover unbeatable deals on Nike's special offer shoes! Elevate your style and performance with exclusive savings. Limited-time offers to step up your game – Don't miss out!
        </p>
        <div className='mt-11 flex flex-wrap gap-4 '>
        <Button label="Shop now" iconURL={arrowRight}/>
        <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer