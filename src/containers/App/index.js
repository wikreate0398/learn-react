import ReactDom from "react-dom";
import React, { Component } from "react";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import TodoProvider from "./Context";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";
import TodoList from "./components/todo-list";

const client = new ApolloClient({
    uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
});

export default class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <TodoProvider>
                    <div className="row justify-content-center" style={{marginTop: '100px'}}>
                        <div className="col-md-6">
                            <AppHeader />
                            <div className="row">
                                <div className="col-md-12 justify-content-between" style={{display: 'flex'}}>
                                    <SearchPanel />
                                    <ItemStatusFilter />
                                </div>
                            </div>
                            <TodoList onDeleted={(id) => this.deleteItem(id)}/>
                        </div>
                    </div>
                </TodoProvider>
            </ApolloProvider>
        );
    };
};