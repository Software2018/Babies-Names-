import React,{Component} from 'react'

class Search extends Component{


  filterUpdate(){

    const val = this.myValue.value


    this.props.fiter(val)
  }


  render(){
return(
      <header>
      <form>
<input type="text" placeholder="Type of filter..." ref={(value)=>{this.myValue=value}}
onChange ={this.filterUpdate.bind(this)}
/>
<button className="submit" type="submit">Submit</button>
      </form>
      </header>
    )
  }
}

export default Search;
