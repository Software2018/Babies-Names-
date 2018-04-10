import React, { Component } from 'react';
import NamesList from './components/namesList'
import Credit from './components/Credit'
import Search from './components/Search'
import ShortList from './components/shortList'

class App extends Component {
constructor()
{super()
  this.state={
    filterText:"",
    favourites:[]


  }
}

fiter=(value)=>
{
this.setState({
    filterText:value
  })


}

addFavourite(id){
  const a= this.state.favourites.concat([id])
const uniq =[...(new Set(a))];


  this.setState({
    favourites:uniq
  })

}

remove=(name)=>{
var array=this.state.favourites
var i=this.state.favourites.indexOf(name)
array.splice(i, 1)

this.setState({
  favourites:array
})




}


  render() {

  return(<div>
    <Search  filterText={this.state.filterText}
    fiter={this.fiter}/>
    <main>
  <ShortList
    favourites={this.state.favourites}
    data={this.props.data}
    remove={this.remove}

  />
    <NamesList data={this.props.data}
    filterText={this.state.filterText}
      addFavourite={this.addFavourite.bind(this)}/>
    <Credit/>
    </main>

</div> )
}
}

export default App;
