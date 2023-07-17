import React from 'react';

function NavBarForm(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="password" id="password" name="password" />
                    <input type="text" id="password" name="password" />
                    <input type="submit" value="Sign in" onClick={props.signIn}/>
                </form>
            ) : (
                <form>Not logged in</form>
            )
        }
    </div>
  )
}

export default NavBarForm;
