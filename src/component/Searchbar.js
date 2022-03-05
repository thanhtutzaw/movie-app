import React from 'react'

function Searchbar() {
  return (
    <div className='search-container'>
        <form spellCheck="false">
        <input  autoComplete="off" type="search" />
        </form>
    </div>
  )
}

export default Searchbar