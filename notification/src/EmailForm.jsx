import React, { useState } from "react";
import apiResponse from './assets/api-response.json'

export default function EmailForm() {

    const [email, setEmail] = useState(""); // TODO: replace with fetching actual email in fetchData
    
    const fetchData = () => {
        // retrieve and return the most recent workout datetime
        const data = apiResponse; // TODO: replace with API request
        const mostRecentWorkout = data[data.length - 1].end_time
        return mostRecentWorkout;
    }

    const emailNotification = (mostRecentWorkout) => {
        // determine if it is the 7th day or not
        // if it is, send a final email explaining the notifications will stop
        // it it isn't, send reminder
        console.log(mostRecentWorkout)
        console.log(email);
    }

    const handleEmail = (e) => { 
        setEmail(e.target.value); 
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        var mostRecentWorkout = fetchData();
        emailNotification(mostRecentWorkout);
    }
    
    return (
      <form>
        <label className="label">Email</label> 
        <input 
            onChange={handleEmail} 
            type="email"
        /> 
        <button type="submit" onClick={handleSubmit}>
            Sign Up For Notifications!
        </button>
      </form>
    );
  }