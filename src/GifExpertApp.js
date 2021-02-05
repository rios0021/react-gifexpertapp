import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Rick and Morty']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter']);
    //     // setCategories( c => [...c, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                {
                    categories.map( (category, index) => 
                        <GifGrid 
                            key ={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
}
