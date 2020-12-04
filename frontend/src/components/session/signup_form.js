import React from 'react';


class SignupForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    }
    this.errors = this.errors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeField(field){
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  errors(field){
    if (this.props.errors[field]) {
      return <p className="session-error">{this.props.errors[field]}</p>
    }
    return 
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signupUser(this.state);
  }

  render() {
    return (
      <div className="signup-wrapper">
        <form id="signup-form" onSubmit={this.handleSubmit}>
        <h2 className="menutube">MenuTube</h2>
        <div className="username">
          <label htmlFor="signup-username">Username</label>
          <input 
              type="text" 
              id="signup-username"
              value={this.state.username}
              onChange={this.changeField("username")}
          />
          {this.errors("username")}
        </div>

         <div className="email">
            <label htmlFor="signup-email">Email</label>
            <input 
                type="text" 
                id="signup-email"
                value={this.state.email}
                onChange={this.changeField("email")}
            />
            {this.errors("email")}
          </div>

           <div className="password">
            <label htmlFor="signup-password">Password</label>
            <input 
                type="password" 
                id="signup-password"
                value={this.state.password}
                onChange={this.changeField("password")}
            />
            {this.errors("password")}
          </div>

           <div className="password2">
            <label htmlFor="signup-password2">Confirm Password</label>
            <input 
                type="password" 
                id="signup-password2"
                value={this.state.password2}
                onChange={this.changeField("password2")}
            />
            {this.errors("password2")}
          </div>

          <input type="submit" value="Sign Up" className="session-btn" />
        </form>

      </div>
    )
  }



}

export default SignupForm;