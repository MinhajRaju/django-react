import React from 'react'
import { connect } from 'react-redux'
import { loginAction, registerAction } from '../Actions/userAction'
import store from '../store'



const mapStateToProps = (state) => {

	console.log(state)



}


export default connect(mapStateToProps)(class LoginScreen extends React.Component {

	constructor(props) {

		super(props)


		this.state = {

			switchForm: "",
			text: "Login",

			userName: "",
			password: "",


			registerUsername: "",
			registerPassword: "",
			confirmPassword: "",

		}


	}


	toggle = (e) => {

		console.log(e.target.text)

		if (e.target.text === 'Register') {
			this.setState({
				switchForm: "Register",
				text: "Login"

			})


		}
		if (e.target.text === 'Login') {
			this.setState({
				switchForm: "Login",
				text: "Register"

			})
		}
	}

	submitHandeler = (e) => {

		e.preventDefault()




		if (document.getElementById('login')) {
			if (!this.state.userName && !this.state.password) {
				const username = document.getElementById('username').value
				const password = document.getElementById('password').value

				if (username != null && password != null) {
					store.dispatch(loginAction(username, password))
				}



			} else {

				store.dispatch(loginAction(this.state.userName, this.state.password))
				this.props.history.push('/dashboard')
			}
		}


		if (document.getElementById('registeruser')) {

			console.log(this.state.registerUsername, this.state.registerPassword)

			if (this.state.registerPassword != this.state.confirmPassword) {
				console.log("password not match")
			} else {

				store.dispatch(registerAction(this.state.registerUsername, this.state.registerPassword))

			}



		}











	}





	render() {

		console.log(this.state.registerUsername, this.state.registerPassword)

		return (
			<div>
				<div className="limiter">
					<div className="container-login100">
						<div className="wrap-login100">
							<div className="login100-pic js-tilt" data-tilt>
								<img src="images/img-01.png" alt="IMG" />
							</div>

							<form className="login100-form validate-form" onSubmit={this.submitHandeler}>

								{this.state.switchForm === 'Login' ? (<div>
									<span className="login100-form-title">
										Member Login
									</span>
									<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
										<input className="input100" type="text" name="email" id="username" placeholder="Email" onChange={(e) => this.setState({ userName: e.target.value })} />
										<span className="focus-input100"></span>
										<span className="symbol-input100">
											<i className="fa fa-envelope" aria-hidden="true"></i>
										</span>
									</div>
									<input className="input100" type="hidden" name="email" id="login" />
									<div className="wrap-input100 validate-input" data-validate="Password is required">
										<input className="input100" type="password" name="pass" id="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
										<span className="focus-input100"></span>
										<span className="symbol-input100">
											<i className="fa fa-lock" aria-hidden="true"></i>
										</span>
									</div>

									<div className="container-login100-form-btn">
										<button className="login100-form-btn" id="login">
											Login
										</button>
									</div>
								</div>) : (<div>
									<span className="login100-form-title">
										Member Register
									</span>
									<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
										<input className="input100" type="text" name="email" placeholder="User name or Email" onChange={(e) => this.setState({ registerUsername: e.target.value })} />
										<span className="focus-input100"></span>
										<span className="symbol-input100">
											<i className="fa fa-envelope" aria-hidden="true"></i>
										</span>
									</div>

									<div className="wrap-input100 validate-input" data-validate="Password is required">
										<input className="input100" type="password" name="pass" placeholder="Password" onChange={(e) => this.setState({ registerPassword: e.target.value })} />
										<span className="focus-input100"></span>
										<span className="symbol-input100">
											<i className="fa fa-lock" aria-hidden="true"></i>
										</span>
									</div>
									<input className="input100" type="hidden" name="email" id="registeruser" />
									<div className="wrap-input100 validate-input" data-validate="Password is required">
										<input className="input100" type="password" name="pass" placeholder="confirm Password" onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
										<span className="focus-input100"></span>
										<span className="symbol-input100">
											<i className="fa fa-lock" aria-hidden="true"></i>
										</span>
									</div>

									<div className="container-login100-form-btn">
										<button className="login100-form-btn" id="register">
											Sign Up
										</button>
									</div>
								</div>)}


								<div className="text-center p-t-136">
									<a className="txt2" href="#" onClick={this.toggle}>
										{this.state.text}
										<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)


	}




})

