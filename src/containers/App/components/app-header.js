import React from 'react';

const AppHeader = ({toDoNum, doneNum}) => {
    return (
        <React.Fragment>
            <h1>My Awesome App</h1>
            <p>
                <span>{ toDoNum }</span> more to do, <span>{ doneNum }</span> done
            </p>
        </React.Fragment>
    );
}

export default AppHeader;