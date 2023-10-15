type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}
import { useState, KeyboardEvent } from 'react'

import { BsSearch } from 'react-icons/bs'

import classes from "./Search.module.css"

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState("")

    //click do enter login user with enter
    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName)
        }
    }

  return (
    <div className={classes.search}>
        <h2>Check for one user:</h2>
        <p>Discover the best repositories</p>
        <div className={classes.search_container}>
            <input 
            type="text" 
            placeholder='Type the name of the user'
            onChange={(e) => setUserName(e.target.value)} 
            onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search