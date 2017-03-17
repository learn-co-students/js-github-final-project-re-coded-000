var token = "3d392ba282d31c7032cf74a8db32dab3d0360070"
var repo = $('#repoName').val();
var owner = $('#repoOwner').val();
var url = "https://api.github.com/repos/"+owner+"/"+repo+"/issues"
var  title = $('#title').val();
var descrip = $('#body').val();

function successFun(json){
		
		var link = `<a href = '${json.html_url}'>${json.title}</a>`;

		$('#issue').append(link);}

function errorFun(error_name){ console.log("Post error: "+ error_name);}

function createIssue(repo, owner, title, descrip) {
	var url = "https://api.github.com/repos/"+owner+"/"+repo+"/issues"
 var data = {
    'title': title,
    'body': descrip,
   'state': "open",
  }
$.ajax({
	url:  url,
	type: 'post',
	dataType: 'json',
	headers: {
			Authorization: "token "+token,
		},
		
		data: JSON.stringify(data)

}).done(successFun).fail(errorFun);}


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