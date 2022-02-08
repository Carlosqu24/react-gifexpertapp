import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
                const [categories, setCategories] = useState(['One Punch']);

                const handleAdd = ( cat ) => setCategories([ cat, ...categories ]);

                return (
                                <>
                                                <h2>Gif Expert App</h2>
                                                <hr />

                                                <AddCategory
                                                                handleAdd={ handleAdd }
                                                />

                                                <ol>
                                                                {
                                                                                categories.map( category => 
                                                                                                <GifGrid 
                                                                                                                key={ category } 
                                                                                                                category={ category }
                                                                                                /> )
                                                                }
                                                </ol>
                                </>
                )
}
