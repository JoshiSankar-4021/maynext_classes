export default function here2(req,res){
    const method =req.method
    const action =req.query.action

    if(method === "POST"){
        const {name,email,address} =req.body

        return res.status(200).json({"message":"requested body",data:{name,email,address}})
    }
}