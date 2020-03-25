import React, { Component } from "react";

export const TodoDataContext = React.createContext();

export default class TodoProvider extends Component {

    state = {
        todoData: [
            { label: 'Drink cofee', important: false, id: 1 },
            { label: 'Create react App', important: true, id: 2 },
            { label: 'Swim with delfins', important: false, id: 3 },
        ]
    };

    deleteItem = (idElement) => {
        this.setState((state) => {
            return {
                todoData: state.todoData.filter(({id}) => id!=idElement)
            }
        });
    };

    render() {
        return (
            <TodoDataContext.Provider value={{
                todoData: this.state.todoData,
                deleteItem: this.deleteItem
            }}>
                { this.props.children }
            </TodoDataContext.Provider>
        );
    }
}