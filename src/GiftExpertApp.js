import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGRid from './components/GifGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);
    // const handleClick = () => {
    //     setCategories(categ => ['Batman',...categories]);
    // }

    return(


        <>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {categories.map((category )=> {
                    return <GifGRid key={category} category={category} />
                })
                }
            </ol>
            
        </>
    );

}

export default GiftExpertApp;