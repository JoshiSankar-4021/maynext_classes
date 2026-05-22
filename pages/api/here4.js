import {pool} from '../../lib/database'
export default async function here4(req,res){
    const method =req.method
    const action =req.query.action

    if(method === "GET"){
        // const {studentid}=req.query;
        // const selectquery=`select * from "Students" where student_id=$1`
        // const values=[studentid]
        // const result = await pool.query(selectquery,values)
        // return res.status(200).json({"data":result.rows}
        //)
        const selectquery1=`select * from "Students"`
        const result = await pool.query(selectquery1)
        return res.status(200).json({"data":result.rows})

    }
}
//http://localhost:3000/api/here4?studen_id=3
//synchornus----->exexcutes line by line without waiting for pervious lines of code
//asynchornus-----> executes every line wait's for connection if requires 
//only than compiler moves to next line code