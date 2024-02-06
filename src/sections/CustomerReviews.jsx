import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
          Discover What Our <spam className='text-coral-red'>Customers</spam> Are saying!
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Dive into a collection of authentic reviews that showcase their experiences, satisfaction, and insights. Join the conversation and let their feedback guide your decision-making journey.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews