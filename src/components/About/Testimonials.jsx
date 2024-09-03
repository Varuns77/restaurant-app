import React from 'react'

const Testimonials = () => {

  return (
    <section
        className="bg-gray-100 grid grid-cols-1 lg:grid-cols-[45fr_55fr] items-center"
        id="section-testimonials"
      >
        <div className="grid grid-cols-3 gap-4">
          <figure>
            <img
              src="./assets/Gallery/gallery-1.jpg"
              alt="Image 1"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-2.jpg"
              alt="Gallery Image 2"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-3.jpg"
              alt="Gallery Image 3"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-4.jpg"
              alt="Gallery Image 4"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-5.jpg"
              alt="Gallery Image 5"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-6.jpg"
              alt="Gallery Image 6"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-7.jpg"
              alt="Gallery Image 7"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-8.jpg"
              alt="Gallery Image 8"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-9.jpg"
              alt="Gallery Image 9"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-10.jpg"
              alt="Gallery Image 10"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-11.jpg"
              alt="Gallery Image 11"
              className="w-full"
            />
          </figure>
          <figure>
            <img
              src="./assets/Gallery/gallery-12.jpg"
              alt="Gallery Image 12"
              className="w-full"
            />
          </figure>
        </div>

        <div className="testimonials-container px-[3rem] py-[4rem] lg:p-[9.6rem_3.2rem] md:p-[4.5rem_3rem] sm:p-[4.5rem_3rem]">
          <span className="subheading text-xl font-bold uppercase text-center block mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold text-center mb-8">
            Once you try it, you can't go back
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <figure className="testimonial text-center">
              <img
                src="./assets/Testimonial/gamer.png"
                alt="Dave Bryson"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <blockquote className="testimonial-text text-lg leading-7 mb-4">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name text-base text-gray-500">
                &mdash; Dave Bryson
              </p>
            </figure>
            <figure className="testimonial text-center">
              <img
                src="./assets/Testimonial/girl.png"
                alt="Hannah"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <blockquote className="testimonial-text text-lg leading-7 mb-4">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className="testimonial-name text-base text-gray-500">
                &mdash; Hannah
              </p>
            </figure>
            <figure className="testimonial text-center">
              <img
                src="./assets/Testimonial/woman.png"
                alt="Dave Bryson"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <blockquote className="testimonial-text text-lg leading-7 mb-4">
                Seven Spoons is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p className="testimonial-name text-base text-gray-500">
                &mdash; Dave Bryson
              </p>
            </figure>
            <figure className="testimonial text-center">
              <img
                src="./assets/Testimonial/man.png"
                alt="Dave Bryson"
                className="w-16 h-16 rounded-full mb-3 mx-auto"
              />
              <blockquote className=" text-lg leading-7 mb-4">
                I got Seven Spoons for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className="text-base text-gray-500">&mdash; Dave Bryson</p>
            </figure>
          </div>
        </div>
      </section>
  )
}

export default Testimonials