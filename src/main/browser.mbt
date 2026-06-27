///|
extern "js" fn page_kind() -> Int =
  #|() => {
  #|  const path = window.location.pathname.replace(/\/+$/, "");
  #|  if (path.endsWith("/post") || path.endsWith("/post.html")) return 2;
  #|  return path.endsWith("/blog") || path.endsWith("/blog.html") ? 1 : 0;
  #|}

///|
extern "js" fn post_slug() -> String =
  #|() => new URLSearchParams(window.location.search).get("slug") ?? ""

///|
extern "js" fn show_page(title : String, html : String) -> Unit =
  #|(title, html) => {
  #|  document.title = title;
  #|  document.querySelector("#app").innerHTML = html;
  #|}
