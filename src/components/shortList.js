import React from 'react'


export default ({data,favourites,remove})=>{

const idList=favourites
.map(id => {
  const{name,sex}= data[id]
  return <li key={id} className={sex} onClick={()=>remove(name)} >{name}</li>
})
return(
  <div className="favourites">

  <h4> Click on a name to shortlist it... </h4>
  <ul> {idList}</ul>
</div>
)
}
