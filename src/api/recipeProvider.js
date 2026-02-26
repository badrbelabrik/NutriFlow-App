export async function CallRecipes(){
    try{
        const response = await fetch("https://dummyjson.com/recipes")
        if(!response.ok){
            throw new Error("Error http",response.status)
        }
        const data = await response.json()
        return data.recipes
    }
    catch(error){
        console.error("Error:", error)
    }
}