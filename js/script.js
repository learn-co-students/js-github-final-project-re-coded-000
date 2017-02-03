function Issue(url,title,body) {
	this.url=url;
	this.title=title;
	this.body=body;
 } 
 function get_inputs_and_submit(e) {
 	var repo = $('#repoName').val();
    var owner = $('#repoOwner').val();
    var title = $('#title').val();
    var body = $('#body').val();
    createIssue(repo,owner, title, body);
 }
function submitForm(){
  $('form').on('submit', function(e){
    get_inputs_and_submit(e);
    e.preventDefault();
  });
}

function GithubInteractor(token){
  this.token = token;
  this.Url = "https://api.github.com/repos/";
}
var req_= new GithubInteractor("my token go here") 

function insert_issues(issue) {
    $('#issue').append('<a href="'+issue.url+'">'+issue.title+'</a>');
}

function handleResponse(data) {
  var issue = new Issue(data.html_url, data.title, data.body)
  insert_issues(issue);
}

function handleError(jqXHR, status, error) {
  console.log("Post error: " + error+"\nStatues: "+status);
}

function createIssue(repo,owner,title,body) {
	data={};
    data.body=body;
    data.title=title;

 $.ajax({
    url: req_.Url+owner + "/" + repo + "/issues",
    type: 'POST',
    dataType: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "token " + req_.token);
    },
    data: JSON.stringify(data)
  }).done(handleResponse).fail(handleError);

}


$(document).ready(function(){
  submitForm();
});