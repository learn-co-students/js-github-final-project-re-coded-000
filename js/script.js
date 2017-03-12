function GithubInteractor(token){
	
	this.token=token;

}
var gitInteractor=new GithubInteractor('')
function createIssue(repo,owner,title,body){
	var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues";
	console.log(url)
	var data={title: title,body: body}
	$.ajax({
		url: url,
		type: "POST",
		data: JSON.stringify(data),
		success: handleResponse,
		
		headers : { Authorization: "token "+gitInteractor.token },

	}).fail(handleError)
}
function handleResponse(json){
	$('#issue').html("<a href='"+json.html_url+"'>"+json.title+"</a>")
}

function handleError(xhr,status,error){
	console.log("Post error: " + error);
}
function submitForm(){
	$('form').submit(function(e){
		e.preventDefault();
		var repo=$('#repoName').val();
		var owner=$('#repoOwner').val();
		var title=$('#title').val();
		var body=$('#body').val();
		createIssue(repo,owner,title,body)
	})
}
$(document).ready(function(){
	submitForm();
})
