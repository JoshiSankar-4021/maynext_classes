export default function here1(req,res){

    const method =  req.method
    const action = req.query.action

    if(method === "POST"){
        if(action === "post1"){
            return res.status(200).json({"message":"post1 sucessfull"})
        }else if(action === "post2"){
            return res.status(200).json({"message":"post2 sucessful"})
        }
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
    
} 

//http://localhost:3000/api/here1?action=post2
