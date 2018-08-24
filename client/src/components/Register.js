import React, { Component }  from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';


class Register extends Component {

    render () {

      return (
        <div>
        <br/> <br/> <br/> <br/>
        <div className="navbar">
          <h2 className="center ">Post It</h2>
        </div>
        <p>Register</p>
        <PostForm />
        <AllPost />

        </div>
      );
    }
}

export default Register;
