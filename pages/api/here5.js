import {pool} from '../../lib/database'
export default async function here5(req,res){
    const method=req.method
    const action=req.query.action

    if(method==="PUT"){
        const {student_id,student_name,grade,roll_num,class_teacher} =req.body
        
        const updatequery =`update "Students" set student_name=$2,
        grade=$3,roll_num=$4,class_teacher=$5 where student_id=$1`
        
        const values =[student_id,student_name,grade,roll_num,class_teacher]
        
        await pool.query(updatequery,values)
        
        return res.status(200).json({"message":"updated student info sucessfully "})

    }
}
//http://localhost:3000/api/here5