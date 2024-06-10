const mongoose=require("mongoose")
const schema=mongoose.Schema(
{
    "empId":String,
    "empName":String,
    "Salary":String
}
)
let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}