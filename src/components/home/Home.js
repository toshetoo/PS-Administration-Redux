import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {

    render() {
        return (
            <div className='jumbotron'>
                <h1>Administration</h1>
                <p>React, Redux and router in ES6</p>
                <Link to='about' className='btn btn-primary btn-lg'> Learn More </Link>
            </div>
        );
    }
}

export default Home;