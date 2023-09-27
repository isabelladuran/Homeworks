import {useState} from "react"
import {AddCategory, GifGrid} from './components'

export const GifExpertApp2 = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (category) => {
        setCategories(list => [...list, category])
    }

    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory onAddCategory={onAddCategory}/>
            {
                categories.map(
                    (category,key) =>
                        {
                            return <GifGrid category={category}  key={key}/>
                        }
                )
            
            }
        </>
    )
}

export default GifExpertApp2