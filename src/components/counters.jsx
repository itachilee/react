import React,{Component} from 'react';
import Counter from './counter';

class Counters extends Component{
    state={
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
    };
    handleDelete =countid=>{
       const counters=this.state.counters.filter(c =>c.id !==countid);
       this.setState({counters});
    }
    render(){
       return(
           <div>
               {this.state.counters.map(
                   counter=><Counter
                       onDelete={this.handleDelete}
                       key={counter.id}
                       value={counter.value}
                       id={counter.id}
                   />)}
           </div>
       );
    }
}
export default Counters;
