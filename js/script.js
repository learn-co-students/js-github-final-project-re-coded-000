$(document).ready(function() {
	  var name, title, body;
	submitForm();
})

function GithubInteractor(token){
  this.token = token;
  this.apiBaseUrl = "https://api.github.com/repos/";
}

var interactor = new GithubInteractor("YoudPutYourTokenHereInRealProduction")


// this function to create an Issue when Ajax is successed .
function Issue(issueUrl, title, body){
	this.issueUrl = issueUrl;
	this.title = title;
	this.body = body
}


Issue.prototype.renderIssue = function (htmlAddSelector) {
	var link =  $("<a>")
	.attr('href',this.issueUrl)
	.text(this.title);
	htmlAddSelector.append(link)
}


function submitForm() {
	$("form").submit(function(event){
	event.preventDefault();
	var name = $("#repoName").val();
	var owner = $("#repoOwner").val();
	var title = $("#title").val();
	var body = $("#body").val();
	createIssue(name,owner,title,body);
	})
}


function handleResponse(response) {
	var newIssue = new Issue(response.html_url, response.title, response.body)
	newIssue.renderIssue($('#issue'));
}

// function handleError(error) {
//     console.log("Post error: " + error);
// }

function handleError(jqXHR, textStatus, error) {
  console.log("Post error: " + error);
}

function createIssue(name,owner,title,body) {
  var url = interactor.apiBaseUrl + owner + "/" + name + "/issues";

	var data ={
		title: title,
		body: body
    }

	$.ajax({
		url: url,
        type: 'POST',
        datatype: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "token " + interactor.token);
    },
        data: JSON.stringify(data)
	})
	.done(handleResponse)
	.fail(handleError);
}

