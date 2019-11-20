import React from 'react';
import Data from '../Data'
import Card from './Card'
import uuid from 'react-uuid';
import './List.css'
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Data:Data,
            check:true 
        }
    }
    handleAscending = ()=>{
        const ascending = this.state.Data.sort((x,y)=>x.year - y.year)
        this.setState({Data: ascending})
    }
    handleDecending = ()=>{
        const descending = this.state.Data.sort((x,y)=>y.year - x.year)
        this.setState({Data: descending})
    }
    handleRate = ()=>{
        const rate = this.state.Data.sort((x,y)=>y.rate - x.rate)
        this.setState({Data: rate})
    }
    handleAlpha = ()=>{
        if(this.state.check){
            const title = this.state.Data.sort((x,y)=>x.title.localeCompare(y.title))
            this.setState({Data: title})
        }else {
            const title = this.state.Data.sort((x,y)=>y.title.localeCompare(x.title))
            this.setState({Data: title})
        }
        this.setState({check: !this.state.check})
    }
    render() { 
        const list = this.state.Data.map(Movies=><Card key={uuid()} Movies={Movies}/>)
        return (
                <main>
                    <div id='btn'>
                    <button onClick={this.handleAscending}>Sort by Date Asc</button> 
                    <button onClick={this.handleDecending}>Sort by Date Dec</button>
                    <button onClick={this.handleRate}>Sort by Rate</button>
                    <button onClick={this.handleAlpha}>Sort by Alpha</button>
                    </div>
                <section>
                    {list}
                 </section>
                 </main>
         );
    }
}
 
export default List;
 
