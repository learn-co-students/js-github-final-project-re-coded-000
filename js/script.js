 var handleResponse =function(response){
 	 $('#issue').append('<a href=' + response.html_url + '>' + response.title + '</a>')
 };
 
 var handleError =function( xhr, textStatus, error) {
  console.log("Post error: " + error);
}

var createIssue = function(repoName, repoOwner, title, body){
	var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/issues";
	var data = {
		'title': title,
		'body': body
	};
	$.ajax({
		url: url,
		type: 'POST',
		data: JSON.stringify(data),
	  headers:{ Authorization : "token " + "e280aecd98cf25de7c28510c65405c90a913b265"}
		}).done(function(response){
			handleResponse(response);
		}).fail(handleError)
	// 	data: JSON.stringify(data)
	// }).done(function(response){
	// 	handleResponse(response);
	// }).fail(function(xhr, textStatus, error){
	// 	handleError(xhr, textStatus, error);
	// });
};


function GithubInteractor(token){
	this.token=token;
};

