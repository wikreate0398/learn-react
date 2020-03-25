import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-light">Active</button>
                <button type="button" className="btn btn-light">Done</button>
            </div>
        );
    }
}