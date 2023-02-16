import { useEffect, useState } from "react"



const useToken = (user) =>{
    const [token,setToken] = useState([]);

    useEffect(()=>{
        const email = user?.email;
        const currentUser = {
            name : user?.name,
            email : email,
            email : user?.number,
        } 
        console.log(user)
        fetch(`http://localhost:5000/api/v1/app/addUser`,{
            method : 'POST',
            headers : {
                'content-type':'application/json',
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    },[user]);
    return token;
}

export default useToken;