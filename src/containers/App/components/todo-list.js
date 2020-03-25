import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { GET_TODO } from "../../../queries/todo";
import TodoListItem from "./todo-list-item";

class  TodoList extends Component {

        deleteItem = (idElement) => {
            this.setState((state) => {
                return {
                    todoData: state.todoData.filter(({id}) => id!=idElement)
                }
            });
        };

        render() {
            return (
                <Query query={GET_TODO}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return 'Loading...';
                            if (error) return `Error! ${error.message}`;

                            return (
                                <ul className="list-group todo-list">
                                    {
                                        data.allPosts.map((item, index) => {

                                            console.log(item);

                                            const {id, ...itemProps} = item;

                                            return (
                                                <li key={ id } className="list-group-item">
                                                    <TodoListItem { ...itemProps }
                                                                  onDeleted={() => this.deleteItem(id)}/>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            );
                        }
                    }

                </Query>
            );
        };
}

export default TodoList;