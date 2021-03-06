import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch man']);

  /* const handleAdd = () => {
    // setCategories([...categories, 'One Piece']);
    setCategories(cate => [...cate, 'One Piece']);
  } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      
      <ol>
        {
          categories.map(category =>
            <GifGrid
              key={category}
              category={category}
            />
          )
        }
      </ol>
    </>
  )
}
