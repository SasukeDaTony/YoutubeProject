import { useState } from "react";

export default function SearchBarForm() {

  const [ submitSearch, setSubmitSearch] = useState([])

  function handleSubmit (e) {
    e.preventDefault();
    
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value="Search"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
