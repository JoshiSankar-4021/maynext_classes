import {pool} from '../../lib/database'
export default function here3(req,res){
    const method =req.method
    const action =req.query.action

    if(method === "POST"){
        const {student_name,grade,roll_num,class_teacher} =req.body
        const insertquery = `insert into "Students" (student_name,grade,roll_num,class_teacher)
        values($1,$2,$3,$4)
        `            //1            2       3       4
        const values=[student_name,grade,roll_num,class_teacher]
        pool.query(insertquery,values)
        console.log("executed")

        //                                 students
        return res.status(200).json({"message":"student added sucess fully"})
    }
}
//http://localhost:3000/api/here3