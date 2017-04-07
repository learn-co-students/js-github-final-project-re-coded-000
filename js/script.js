var token = "3d392ba282d31c7032cf74a8db32dab3d0360070"
var repo = $('#repoName').val();
var owner = $('#repoOwner').val();
var url = "https://api.github.com/repos/"+owner+"/"+repo+"/issues"
var  title = $('#title').val();
var descrip = $('#body').val();
function GithubInteractor(token){
	
	this.token=token;

}


function handleResponse(json){
		
		var link = `<a href = '${json.html_url}'>${json.title}</a>`;

		$('#issue').append(link);}

function handleError(jqXHR, textStatus, errorThrown){ console.log("Post error: "+ errorThrown);}

function createIssue(repo, owner, title, descrip) {
	var url = "https://api.github.com/repos/"+owner+"/"+repo+"/issues"
 var data = {
    'title': title,
    'body': descrip,
  }
$.ajax({
	url:  url,
	type: 'POST',
	dataType: 'json',
	headers: {
			Authorization: "token "+GithubInteractor(token),
		},
		
		data: JSON.stringify(data)

}).done(handleResponse).fail(handleError);}


function submitForm() {
	$('form').submit(function(e) {
		e.preventDefault();
		var repo = $('#repoName').val();
        var owner = $('#repoOwner').val();
		var  title = $('#title').val();
        var descrip = $('#body').val();

		createIssue(repo, owner, title, descrip);
	});
}

$(document).ready(function(){
  
  submitForm();
});