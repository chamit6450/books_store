import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const SingleBook = () => {
  const { _id, bookTitle, imageURL, authorName, bookDescription } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24 flex flex-row flex-1">
      <img src={imageURL} alt="" className="h-96" />
      <div className="px-10 lg:px-24">
        <h2 className="mb-2 text-3xl font-bold">
          <h2>{bookTitle}</h2>
        </h2>
        <h3 className="mb-2 text-2xl font-thin">
          <h3>{authorName}</h3>
        </h3>

        <div className="flex items-center gap-5">
          <div className="text-amber-500 flex gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h6 className="mb-2 text-3xl font-semibold mt-2">4.33</h6>
          <h6 className="mb-2 text-gray-400 font-semibold mt-2">
            676 ratings | 114 reviews
          </h6>
        </div>
        <div>
          <p>{bookDescription}</p>
        </div>
        <div>
        <h6 className="mb-2 text-gray-700 text-sm font-thin mt-2">380 pages, Paperback</h6>
          <h6 className="mb-2 text-gray-700 font-thin text-sm mt-2">
          First published January 1, 1867
          </h6>
        </div>
      
        <div className="mt-6">
        <button className='bg-blue-700 text-white font-semibold px-10 py-2 rounded hover:bg-black transition-all duration-300'>Want to Read</button>
        </div>
        <div className="mt-6">
        <button className= 'text-blue-700 border border-blue-700 font-semibold px-11 py-2 rounded hover:bg-black transition-all duration-300'>Kindle $2.99</button>
        </div>

        <hr className="mt-8"/>
        <div>
        <h6 className="mb-2 text-2xl font-bold mt-3">Ratings and Reviews</h6>
        <div className="flex justify-center items-center">
        <h6 className="mb-2 text-3xl font-bold mt-8">What do <i className="italic">you</i> think ?</h6>
        </div>
        <div className="flex justify-center items-center mt-5 ">
          <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          </div>
         <p>Rate this book</p>
          </div>
        <button className='bg-blue-700 text-white font-semibold px-10 py-2 ml-9 rounded hover:bg-black transition-all duration-300'>Write a Reveiw</button>
        </div>
        </div>
      </div>

    </div>
  );
};

export default SingleBook;
