import React from "react";


// components
import Layout from "./Layout";


const StoreShell = React.createClass({

    render(){

        return(

            <div className="theBigWrapper">
              <Layout userId={this.props.userId}
                      loginUser={this.props.loginUser}/>
            </div>

          )

    }
})

export default StoreShell;