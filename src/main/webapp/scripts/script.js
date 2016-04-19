/**
 * 
 */

$(document).ready(function() {
			$.get("rest/user", function(data){
				var rowTemplate = $("#templates table").html();
				console.log(rowTemplate);
				for(index in data){
					var row = rowTemplate.replace("id",data[index].id)
								.replace("name",data[index].name)
								.replace("emailId",data[index].emailId)
								.replace("password",data[index].password)
								.replace("joining_date",data[index].joinDate)
								.replace("age",data[index].age)
								.replace("state",data[index].state);
					$("#User").append(row);
				}
			});
		});