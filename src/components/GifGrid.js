import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

                const { data:images, isLoading } = useFetchGifs( category );

                return (
                                <>
                                                <h3>{ category }</h3>

                                                { isLoading && <p className="animate__animated animate__flash">Loading...</p> }

                                                <div className="card-grid">
                                                                {
                                                                                images.map( image => <GifGridItem
                                                                                                                                                key={ image.id }                                                
                                                                                                                                                { ...image }                 
                                                                                                                                />)
                                                                }
                                                </div>
                                </>
                )
}
