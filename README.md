# Personal Website in MoonBit

This is a tiny starter personal website with two pages:

- `public/index.html` for the self-introduction page
- `public/blog.html` for the blog page

The MoonBit source lives in `src/main/main.mbt`. It uses the JavaScript backend plus small FFI calls to render browser HTML.

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

The HTML pages load `public/main.js`, which is generated from MoonBit. Do not edit it directly; edit `src/main/main.mbt` and rebuild.

## Customize

- Change the name and intro text in `src/main/main.mbt`
- Replace `hello@example.com` with your real email
- Add new blog posts by adding more `<article class="post">` blocks
