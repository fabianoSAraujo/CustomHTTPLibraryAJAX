const http = new easyHTTP();

/* GET POSTS */
/* http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  } */
/* { mode: "cros" } */
/* }); */
/* CREATE DATA */
const data = {
  title: "Custom Post",
  body: "This is a custom post",
};

/* CREATE POST */
/* http.post("https://jsonplaceholder.typicode.com/posts", data, function (
  err,
  posts
) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
}); */

/* DELETE POST */

http.delete("https://jsonplaceholder.typicode.com/posts/1", function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
