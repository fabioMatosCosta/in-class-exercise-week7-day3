import React, {Component} from 'react';

class List extends Component {
    render () {
        return (
            <div>
                <h1 onClick = {()=>{
                    this.props.deleteItem(this.props.index)
                }} >
                    {this.props.item}
                </h1>
            </div>
        );
    }
}


export default List;