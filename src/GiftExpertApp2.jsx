import {useState} from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

export const GifExpertApp2 = () => {
    const [categories, setCategories] = useState(["Zodiac"])

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