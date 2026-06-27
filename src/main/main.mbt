///|
fn main {
  if page_kind() == 2 {
    match @posts.find(post_slug()) {
      Some(post) =>
        show_page(
          post.title + " - " + @config.site.brand,
          render_header(@config.site, true) +
          render_post_page(post, @pages.blog),
        )
      None =>
        show_page(
          @pages.blog.page_title,
          render_header(@config.site, true) +
          render_blog(@pages.blog, @posts.all),
        )
    }
  } else if page_kind() == 1 {
    show_page(
      @pages.blog.page_title,
      render_header(@config.site, true) + render_blog(@pages.blog, @posts.all),
    )
  } else {
    show_page(
      @pages.about.page_title,
      render_header(@config.site, false) +
      render_about(@pages.about, @config.site),
    )
  }
}
