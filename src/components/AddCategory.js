import React, {useState} from 'react';



const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        
        e.preventDefault();
        setCategories(categ => [inputValue,...categ]);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input value={inputValue} onChange={handleChange}/>
        </form>

    )
}

export default AddCategory;