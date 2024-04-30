import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import { Avatar } from 'flowbite-react';
import proPic from "/src/assets/profile.jpg"
import proPic1 from "/src/assets/lady2.jpg";
import proPic2 from "/src/assets/lady3.jpg";
import proPic3 from "/src/assets/boy1.jpg";
import proPic4 from "/src/assets/man2.jpg";


const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='space-y-6 shadow-2xl bg-white rounded-lg md:m-5 p-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text  */}
                <div className='mt-7'>
                    <p className='mb-5'>Dive into the captivating mystery of 'Gone Girl' by Gillian Flynn. This gripping psychological thriller keeps you on the edge of your seat as it unravels a twisted tale of love, betrayal, and deception. A must-read for fans of dark, suspenseful storytelling.</p>
                    <div>
                    <Avatar 
                    img={proPic} 
                    rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mary Ping</h5>
                    <p className='text-base'>CEO, ABC Company</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6 shadow-2xl bg-white rounded-lg md:m-5 p-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text  */}
                <div className='mt-7'>
                    <p className='mb-5'>Embark on an epic adventure with 'The Hobbit' by J.R.R. Tolkien. Join Bilbo Baggins on a journey through Middle-earth filled with dwarves, dragons, and magical encounters. Tolkien's timeless tale of courage and friendship continues to captivate readers of all ages.</p>
                    <div>
                    <Avatar 
                    img={proPic1} 
                    rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Priya Patel</h5>
                    <p className='text-base'>HR Manager, ABC Pharmaceuticals</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6 shadow-2xl bg-white rounded-lg md:m-5 p-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text  */}
                <div className='mt-7'>
                    <p className='mb-5'>Explore the haunting beauty of 'The Picture of Dorian Gray' by Oscar Wilde. This classic novel delves into the depths of human vanity and the consequences of unchecked desire. Wilde's exquisite prose and sharp wit make this a literary masterpiece worth savoring.</p>
                    <div>
                    <Avatar 
                    img={proPic4} 
                    rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Rajesh Gupta</h5>
                    <p className='text-base'>Sales Director, XYZ Electronics</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6 shadow-2xl bg-white rounded-lg md:m-5 p-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text  */}
                <div className='mt-7'>
                    <p className='mb-5'>Discover the enchanting world of 'The Night Circus' by Erin Morgenstern. Lose yourself in this magical tale of dueling illusionists set within a mesmerizing circus. A captivating blend of romance, mystery, and fantasy that will leave you spellbound.</p>
                    <div>
                    <Avatar 
                    img={proPic2} 
                    rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Ananya Sharma</h5>
                    <p className='text-base'>Operations Manager, LMN Consultancy</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='space-y-6 shadow-2xl bg-white rounded-lg md:m-5 p-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text  */}
                <div className='mt-7'>
                    <p className='mb-5'>Immerse yourself in the heartwarming tale of 'The Book Thief' by Markus Zusak. Set against the backdrop of Nazi Germany, this poignant story follows a young girl named Liesel as she discovers the power of words and the resilience of the human spirit. A moving and unforgettable read.</p>
                    <div>
                    <Avatar 
                    img={proPic3} 
                    rounded 
                    className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Arjun Singh</h5>
                    <p className='text-base'>Senior Accountant, QRS Financial Services</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Review;