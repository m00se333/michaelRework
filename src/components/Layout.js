import React from "react";

const Layout = React.createClass({

      
    handleClick(e){
      e.preventDefault();

      this.props.loginUser(this.user_name.value);
      console.log(this.user_name.value);
      this.user_name.value = "";

    },

    render(){


        return(

          <div>
              <h1>Yup!</h1>
              <input ref={(input) => this.user_name = input} type="text" placeholder="user name"/>
              <button onClick={this.handleClick}>Login</button>
          </div>

          )

    }

})

export default Layout;