import React, { Component, Fragment } from 'react';
import { TodoDataContext } from "../Context";

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done,
                important: false
            }
        });
    };

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important,
                done: false
            }
        });
    };

    render() {
        const { title = false, onDeleted } = this.props;
        const { done, important } = this.state;

        return (
            <Fragment>
                <span className={`todo-list-item ${ done ? 'done' : '' } ${ important ? 'important' : '' }`}
                  onClick={ this.onLabelClick }>{ title }</span>

                <p style={{ float:'right', marginBottom: 0 }}>
                    <button className = "btn btn-xs btn-trash"
                            onClick={ this.props.onDeleted }>
                        <i className="fa fa-trash"></i>
                    </button>

                    <button className = "btn btn-xs btn-important"
                            onClick={ this.onMarkImportant }>
                        <i className="fa fa-exclamation"></i>
                    </button>
                </p>
            </Fragment>
        );
    };
}