import React ,{useState} from "react"
function Register(){
    const [Name, setName] = useState("")
    const [Number, setNumber] = useState()
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    async function SignUp(){
        let item = {
            Name,
            Number,
            Email,
            Password
        }
        console.log(item);
        let result = await fetch("https://api.gyftm.in/api/Auth/CreateUser", {
            method : 'POST',
            body : JSON.stringify(item),
            headers : {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result  = await result.json()
        console.log("result", result)
    }

    return(
        <div>
            <h1>Register Page</h1>
            <input type="text" value={Name} onChange = {(e)=> setName(e.target.val)} placeholder="Name"/><br />
            <input type="number" value={Number} onChange = {(e)=> setNumber(e.target.val)} placeholder="Mobile Number"/><br />
            <input type="email" value={Email} onChange = {(e)=> setEmail(e.target.val)} placeholder="Email Id"/><br />
            <input type="password" value={Password} onChange = {(e)=> setPassword(e.target.val)} placeholder="Password" /><br />
            <button onClick={SignUp}>Sing Up</button>
        </div>
    )
}

export default Register
