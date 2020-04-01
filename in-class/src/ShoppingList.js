import React, {Component} from 'react';
import List from './List'

class ShoppingList extends Component {
    constructor(){
        super();
        this.updateShoppingList = this.updateShoppingList.bind(this);
    }

    state = {
        list: ["Tomatoes", "Pasta", "Bananas"],
    }

    updateShoppingList(indexN){
        let updatedList = [...this.state.list];
        updatedList.splice(indexN, 1);
        this.setState({
            list: updatedList
        })
    }

    render(){
        return(
            <div>
                {this.state.list.map((itemN, indexN)=>(
                    <List 
                        index = {indexN.toString()}
                        deleteItem = {this.updateShoppingList}
                        item = {itemN}
                    />
                ))}
            </div>
        )
    }
}

export default ShoppingList;