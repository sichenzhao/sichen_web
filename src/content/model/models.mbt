///|
pub(all) struct SiteConfig {
  brand : String
  navigation_label : String
  about_link : String
  about_path : String
  blog_link : String
  blog_path : String
}

///|
pub(all) struct AboutPage {
  page_title : String
  eyebrow : String
  name : String
  lede : String
  introduction : String
  blog_cta : String
  about_heading : String
  about_body : String
  now_heading : String
  now_items : Array[String]
}

///|
pub(all) struct BlogPage {
  page_title : String
  eyebrow : String
  heading : String
  description : String
  read_post : String
  back_to_blog : String
}

///|
pub(all) struct Post {
  slug : String
  date : String
  title : String
  description : String
  body : Array[String]
}
