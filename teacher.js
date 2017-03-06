var student=require("./student")
var add=function(teacherName,students){
	console.log("Add teacher:"+teacherName)
	students.forEach(function(item,index){
		student.add(item)
	})
}
exports.add=add