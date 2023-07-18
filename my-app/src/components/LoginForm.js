import React from 'react';

function LoginForm(props) {
  return (
    <div>
        {
            props.displayLogin ? (
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="password" id="password" name="password">Password:</label>
                    <input type="text" id="password" name="password" />
                    <button onClick={props.handleSignIn} >Sign in</button>
                </div>
            ) : (
                <div>Not logged in</div>
            )
        }
    </div>
  )
}

export default LoginForm;
