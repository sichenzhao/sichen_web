///|
pub let all : Array[@model.Post] = [
  starting_a_website, site_direction, moonbit_learning_log,
]

///|
pub fn find(slug : String) -> @model.Post? {
  for post in all {
    if post.slug == slug {
      return Some(post)
    }
  }
  None
}
