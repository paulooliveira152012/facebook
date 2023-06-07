import React from "react";
import "./style.css";
import x from "../../assets/images/x.png"
//document which contains functions to 


function SignUpForm({ onClose }) {
    const handleSignUp = () => {
        const firstNameInput = document.getElementById("firstName");
        const firstNameValue = firstNameInput.value;
        console.log(firstNameValue)
    };
    
    return (
        <div className="signUp">
            <div className="top">
                <h2>Sign Up</h2> <img src={x} onClick={onClose} alt="Close"></img>
                <p>It's quick and easy</p>
            </div>

            <div className="line"></div>
            
            <div className="bottom">

                <div className="name">
                    <div className="firstName">
                          <div>
                            <input 
                            type="text" 
                            className="inputName"
                            name="firstName"
                            placeholder="First name"
                            id="firstName"
                            ></input>
                            </div>
                    </div>
                    <div className="lastName">
                        <div>
                            <input 
                            type="text" 
                            className="inputName"
                            name="lastName"
                            placeholder="Last name"
                            ></input>                            </div>
                        </div>
                </div>

                <div className="emailPhone">
                    <input 
                    type="text" 
                    className="email" 
                    placeholder="Mobile number or email"
                    ></input>
                </div>

                <div className="password">
                    <input 
                    type="text" 
                    className="pass" 
                    placeholder="New password"
                    ></input>
                </div>

                <a className="title">Birthday</a> 
                <div className="birthday">
                    <div className="dates">
                        <select>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>
                       
                        <select value="1">
                            {Array.from({length: 31}, (_, i) => 1 + i).map((day) => (
                                <option value={day}>{day}</option>
                            ))}
                        </select>

                        <select value="2023">
                            {Array.from({length: 119}, (_, i) => 2023 - i).map((year) => (
                                <option value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <a className="title">Gender</a>
                
                <div className="genders">
                    <div className="gender">
                        <span>
                            <label>Female</label>
                            <input type="radio"></input>
                        </span>

                        <span>
                            <label>Male</label>
                            <input type="radio"></input>
                        </span>

                        <span>
                            <label>Custom</label>
                            <input type="radio"></input>
                        </span>
                        
                    </div>
                </div>

                <p>People who use our service may have uploaded your contact information to Facebook. <a href="">Learn more</a>.</p>
                <p>By clicking Sign Up, you agree to our<a href=""> Terms, Privacy Policy</a> and<a href="">Cookies Policy</a>. You may receive SMS Notifications from us and can opt out any time.</p>

                <div className="signUpButton">
                <button id="signUpBtn" onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
            
        </div>
    )
}

export default SignUpForm;