import React,{ Component } from 'react';


class Counter extends Component{
    state = {
        value: this.props.value,
        tags: ['tag1','tag2','tag3']
    };
    handleIncrement = product =>{
        console.log(product);
        this.setState({value:this.state.value+product});
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <span className={this.getClassBadge() }>{this.formatCount()}</span>
                <button
                    onClick={() =>this.handleIncrement(1)}
                    className="btn btn-secondary btn-sm">Increment
                </button>
                <button
                    onClick={()=>this.props.onDelete(this.props.id)}
                    className="btn btn-danger btn-sm m-2">
                    delete
                </button>

            </div>
        ) ;
    }

    getClassBadge(){
        let classes ="badge m-2 badge-";
        classes +=(this.state.value===0)?"warning":"primary";
        return classes;
    }
    formatCount(){
        const {value} =this.state;
        return value ===0 ? "ZERO" : value;
    }
    // renderTags(){
    //     if (this.state.tags.length===0) return <p>there are no tags</p>;
    //     return <ul>
    //         {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
    //     </ul>;
    // }
}

export default Counter;
