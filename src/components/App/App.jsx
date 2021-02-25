import React from 'react';
import { Message } from '../Messages';


const App = () => {
    // return React.createElement('div', {id: 'test-id'}, 'Hello from react')
    return <div id='test-id'>
        <h2>Hello</h2>
        <Message text="My new message" />
        </div>
}

export { App };