$(document).ready(function(){
	submitForm();
})

function GithubInteractor(token){
	this.token=token;
}

function createIssue(repo,owner,title,body, token){
	var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues";
	var data={
		'title': title,
		'body': body
	}
	$.ajax({
		url: url,
		type: "POST",
		data: JSON.stringify(data),
		beforeSend: function(xhr) {
     		xhr.setRequestHeader("Authorization", "token " + token);
    	}
	}).done(handleResponse)
	.fail(handleError);
}
function handleResponse(json){
	$('#issue').html("<a href='"+json.html_url+"'>"+json.title+"</a>")
}

function handleError(xhr,status,error){
	console.log("Post error: " + error);
}

function submitForm(){
	$('form').on('submit', function(e){
		e.preventDefault();
		var repo=$('#repoName').val();
		var owner=$('#repoOwner').val();
		var title=$('#title').val();
		var body=$('#body').val();
		var token = $('#token').val();
		createIssue(repo,owner,title,body, token)
	})
}
