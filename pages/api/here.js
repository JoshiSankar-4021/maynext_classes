export default function here(req,res){

    const method =  req.method
    if(method === "POST"){
        return res.status(200).json({"message":"post method sucessfull"})
    }

    if(method==="GET"){
        return res.status(200).json({"message":"GET method sucessfull"})
    }

    if(method === "PUT"){
        return res.status(200).json({"message":"PUT method sucessfull"})
    }

    if(method === "DELETE"){
        return res.status(200).json({"message":"DELETE method sucessfull"})

    }
    if(method === "POST"){
         return res.status(200).json({"message":"post1 method sucessfull"})
    }
} 

//http://localhost:3000/api/here
