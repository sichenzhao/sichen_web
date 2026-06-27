///|
fn escape_html(text : String) -> String {
  text
  .replace_all(old="&", new="&amp;")
  .replace_all(old="<", new="&lt;")
  .replace_all(old=">", new="&gt;")
  .replace_all(old="\"", new="&quot;")
  .replace_all(old="'", new="&#39;")
}

///|
fn render_header(content : @model.SiteConfig, blog_is_active : Bool) -> String {
  let about_current = if blog_is_active { "" } else { " aria-current=\"page\"" }
  let blog_current = if blog_is_active { " aria-current=\"page\"" } else { "" }
  [
    "<header class=\"site-header\">",
    "<a class=\"brand\" href=\"\{escape_html(content.about_path)}\">\{escape_html(content.brand)}</a>",
    "<nav aria-label=\"\{escape_html(content.navigation_label)}\">",
    "<a\{about_current} href=\"\{escape_html(content.about_path)}\">\{escape_html(content.about_link)}</a>",
    "<a\{blog_current} href=\"\{escape_html(content.blog_path)}\">\{escape_html(content.blog_link)}</a>",
    "</nav>",
    "</header>",
  ].join("")
}

///|
fn render_about(content : @model.AboutPage, site : @model.SiteConfig) -> String {
  let now_items = content.now_items
    .map(item => "<li>\{escape_html(item)}</li>")
    .join("")
  [
    "<main>",
    "<section class=\"intro\">",
    "<p class=\"eyebrow\">\{escape_html(content.eyebrow)}</p>",
    "<h1>\{escape_html(content.name)}</h1>",
    "<p class=\"lede\">\{escape_html(content.lede)}</p>",
    "<p>\{escape_html(content.introduction)}</p>",
    "<p class=\"actions\"><a class=\"button\" href=\"\{escape_html(site.blog_path)}\">\{escape_html(content.blog_cta)}</a></p>",
    "</section>",
    "<section class=\"section\">",
    "<h2>\{escape_html(content.about_heading)}</h2>",
    "<p>\{escape_html(content.about_body)}</p>",
    "</section>",
    "<section class=\"section\">",
    "<h2>\{escape_html(content.now_heading)}</h2>",
    "<ul>\{now_items}</ul>",
    "</section>",
    "</main>",
  ].join("")
}

///|
fn render_post_summary(post : @model.Post, content : @model.BlogPage) -> String {
  [
    "<article class=\"post\">",
    "<p class=\"date\">\{escape_html(post.date)}</p>",
    "<h2><a href=\"./post.html?slug=\{escape_html(post.slug)}\">\{escape_html(post.title)}</a></h2>",
    "<p>\{escape_html(post.description)}</p>",
    "<a class=\"post-link\" href=\"./post.html?slug=\{escape_html(post.slug)}\">\{escape_html(content.read_post)}</a>",
    "</article>",
  ].join("")
}

///|
fn render_blog(content : @model.BlogPage, posts : Array[@model.Post]) -> String {
  let post_list = posts.map(post => render_post_summary(post, content)).join("")
  [
    "<main>",
    "<section class=\"intro\">",
    "<p class=\"eyebrow\">\{escape_html(content.eyebrow)}</p>",
    "<h1>\{escape_html(content.heading)}</h1>",
    "<p class=\"lede\">\{escape_html(content.description)}</p>",
    "</section>",
    "<section class=\"posts\">\{post_list}</section>",
    "</main>",
  ].join("")
}

///|
fn render_post_page(post : @model.Post, content : @model.BlogPage) -> String {
  let body = post.body
    .map(paragraph => "<p>\{escape_html(paragraph)}</p>")
    .join("")
  [
    "<main>",
    "<article class=\"post-detail\">",
    "<p class=\"date\">\{escape_html(post.date)}</p>",
    "<h1>\{escape_html(post.title)}</h1>",
    "<p class=\"lede\">\{escape_html(post.description)}</p>",
    "<div class=\"post-body\">\{body}</div>",
    "<p class=\"post-back\"><a href=\"./blog.html\">← \{escape_html(content.back_to_blog)}</a></p>",
    "</article>",
    "</main>",
  ].join("")
}
