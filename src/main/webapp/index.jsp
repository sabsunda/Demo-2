
<html>
<head>
	<script src="scripts/jquery-2.1.3.js"></script>
	<script>
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
	</script>
</head>
<body>
<div id="templates" style="display: none;">
	<table>
		<tr><td>id</td><td>name</td><td>emailId</td><td>password</td><td>joining_date</td><td>age</td> <td>state</td></tr>
	</table>
</div>
<table id="User">
<tr><td>Id</td><td>Name</td><td>EmailId</td><td>Password</td><td>Joining Date</td><td>Age</td> <td>State</td></tr>
</table>
</body>
</html>
