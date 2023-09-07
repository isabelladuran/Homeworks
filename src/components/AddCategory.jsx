import { useState } from "react"

const AddCategory = ({onAddCategory}) => {
    const [category,setCategory] = useState('')
    const onSetCategory = (event) => {
        setCategory(event.target.value)
    }
    return(
        <>
            <input type="text" value= {category} onChange={(event) => onSetCategory(event)}/>
            <button onClick={() => onAddCategory(category)}>Añadir categoría</button>
        </>
    )
}

export default AddCategory