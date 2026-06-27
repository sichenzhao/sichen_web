# Personal Website in MoonBit

This is a small personal website with two pages:

- `public/index.html` for the about page
- `public/blog.html` for the blog page

Its content structure takes inspiration from [al-folio](https://github.com/alshedivat/al-folio): shared settings, pages, and posts live separately. The implementation remains MoonBit-native.

## Project Structure

```text
src/
├── content/
│   ├── config/       # shared name and navigation labels
│   ├── model/        # content type definitions
│   ├── pages/        # about and blog page content
│   └── posts/        # one MoonBit file per blog post
└── main/
    ├── browser.mbt   # small browser boundary
    ├── main.mbt      # page selection
    └── render.mbt    # HTML rendering
```

Generated files and static assets live in `public/`.

## Update The Content

- Edit the name and navigation in `src/content/config/site.mbt`
- Edit the about page in `src/content/pages/about.mbt`
- Edit the blog heading in `src/content/pages/blog.mbt`
- Edit each post in `src/content/posts/`

To add a post, create a dated file such as `src/content/posts/2026_07_my_new_post.mbt`:

```mbt
///|
let my_new_post : @model.Post = {
  slug: "my-new-post",
  date: "July 2026",
  title: "My new post",
  description: "A short description of what I learned.",
  body: [
    "The first paragraph of the post.",
    "Another paragraph with more detail.",
  ],
}
```

Then add it to `src/content/posts/index.mbt`:

```mbt
pub let all : Array[@model.Post] = [
  my_new_post,
  // Other posts...
]
```

After any content change, rebuild:

```sh
sh scripts/build-site.sh
```

Refresh the browser to see the result. Do not edit `public/main.js` directly because the build script generates it.

## Run Locally

Build the MoonBit JavaScript bundle first:

```sh
sh scripts/build-site.sh
```

Then preview the site:

```sh
python3 -m http.server 8000 --directory public
```

Then open `http://localhost:8000/`.

## Install MoonBit

The official macOS/Linux install command is:

```sh
curl -fsSL https://cli.moonbitlang.com/install/unix.sh | bash
```

Restart your terminal after installing, then check:

```sh
moon version
```

## Build With MoonBit

Build the JavaScript backend and copy the generated bundle into `public/`:

```sh
sh scripts/build-site.sh
```

The HTML pages load `public/main.js`, which is generated from MoonBit. Do not edit it directly; edit the MoonBit files under `src/` and rebuild.

## Customize

- Edit visible wording under `src/content/`
- Edit page structure in `src/main/render.mbt`
- Edit colors, spacing, and typography in `public/styles.css`
