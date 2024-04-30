import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL} = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Horror",
    "Science-Fiction",
    "Romance",
    "Programming",
    "Fantasy",
    "History",
    "Bibliography",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Buisness",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event)=>{
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission 
  const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;

    const bookTitle= form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }

    //update book data
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updateBookObj)
    }).then(res=>res.json()).then(data=>{
      alert("Book data updated successfully!");
    })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/* first row  */}
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label 
              htmlFor="bookTitle" 
              value="Book Title" />
            </div>
            <TextInput 
            id="bookTitle"
            name='bookTitle' 
            type="text"
            placeholder="Book Name"
            required
            defaultValue={bookTitle} />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput 
            id="authorName"
            name='authorName' 
             type="text"
            placeholder="Author Name" 
            required
            defaultValue={authorName}/>
          </div>
        </div>

        {/* second row  */}
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput 
            id="imageURL"
            name='imageURL' 
            type="text"
            placeholder="Book image URL" required
            defaultValue={imageURL} />
          </div>

          {/* category  */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option)=><option key='option' value={option}>{option}</option>)
            }
            </Select>
          </div>
        </div>

        {/* bookDescription  */}
        <div>
        <div className="mb-2 block">
          <Label 
            htmlFor="bookDescription" 
            value="Book Description" />
        </div>
        <Textarea 
        id="bookDescription" 
        placeholder="Write Your Book Description..." 
        required 
        className='w-full'
        rows={6}
        defaultValue={bookDescription} />
      </div>
      <div>
      </div>

      {/* book pdf link  */}
      <div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookPDFURL" 
          value="Book PDF URL" />
        </div>
        <TextInput 
        id="bookPDFURL" 
        type="text" 
        name="bookPDFURL" 
        placeholder="Book PDF URL" 
        required 
        defaultValue={bookPDFURL}/>
      </div>

      <Button type="submit" className='mt-5'>Update Book Data</Button>
    </form>
      
    </div>
  );
};

export default EditBooks;