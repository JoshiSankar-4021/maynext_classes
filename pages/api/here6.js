import {pool} from '../../lib/database'

export default async function here6(req,res){
    const method = req.method
    const action = req.query.action

    if(method === "DELETE"){
        const {student_id}=req.query

        const deletequery = `delete from "Students" where student_id=$1`
        
        const values =[student_id]

        await pool.query(deletequery,values)

        return res.status(200).json({"message":"student deleted"})
    }
}
//http://localhost:3000/api/here6?student_id=4