import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe'
const App=()=> {

const App_Id= "da7694fc"
const APP_KEY = "3360e87409d154110143cfa124639565"



const [recipes , setRecipes] = useState([]);
const [search,setSearch] = useState("");
const [query,setQuery] =useState("paneer");
useEffect (
  () => {
    getRecipes();
  },[query]
)
const getRecipes=async() => {
  const response =  await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${APP_KEY}`)
  const data =await response.json();
  setRecipes(data.hits);
};

const updateSearch= e =>{
  setSearch(e.target.value)

}

const getSearch = e => {
  e.preventDefault();
  setQuery(search)
}
  return (
    <div className="App">

      <form onSubmit = {getSearch} className="search=form">
      <input className="search-bar" type= "text" value={search} onChange={updateSearch}></input>
      <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} 
         calorie= {recipe.recipe.calories}
         image= {recipe.recipe.image}
         ingredients= {recipe.recipe.ingredientLines}
         />
      ))};

    </div>
  );
}

export default App;
