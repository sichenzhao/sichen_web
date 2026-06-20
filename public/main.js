const _M0FP410sichenzhao15personal_2dsite3src4main10page__kind = () => window.location.pathname.endsWith("/blog.html") ? 1 : 0;
const _M0FP410sichenzhao15personal_2dsite3src4main13render__intro = () => {
  document.title = "Sichen Zhao";
  document.querySelector("#app").innerHTML = `
    <main>
      <section class="intro">
        <p class="eyebrow">Hello, I am</p>
        <h1>Sichen Zhao</h1>
        <p class="lede">I am building a small personal website for writing, learning notes, and projects.</p>
        <p>This first version is intentionally simple: an intro page, a blog page, and a MoonBit build that renders the page content in the browser.</p>
      </section>
      <section class="section">
        <h2>About</h2>
        <p>I like learning by making small things. This site will grow as I explore MoonBit, write short notes, and collect project ideas.</p>
      </section>
      <section class="section">
        <h2>Now</h2>
        <ul>
          <li>Learning MoonBit for web experiments</li>
          <li>Setting up a clean place to write</li>
          <li>Keeping the design quiet and easy to read</li>
        </ul>
      </section>
    </main>`;
};
const _M0FP410sichenzhao15personal_2dsite3src4main12render__blog = () => {
  document.title = "Blog - Sichen Zhao";
  document.querySelector("#app").innerHTML = `
    <main>
      <section class="intro">
        <p class="eyebrow">Blog</p>
        <h1>Writing</h1>
        <p class="lede">Short notes about MoonBit, projects, and things I am learning.</p>
      </section>
      <section class="posts">
        <article class="post">
          <p class="date">June 2026</p>
          <h2>Starting a website with MoonBit</h2>
          <p>A first pass at a personal site with a self-introduction, a blog page, and a MoonBit build that renders the content.</p>
        </article>
        <article class="post">
          <p class="date">Draft</p>
          <h2>What I want this site to become</h2>
          <p>A compact home for experiments, writing, and notes worth keeping.</p>
        </article>
        <article class="post">
          <p class="date">Draft</p>
          <h2>MoonBit learning log</h2>
          <p>Syntax notes, build commands, and small discoveries from learning the language.</p>
        </article>
      </section>
    </main>`;
};
(() => {
  if (_M0FP410sichenzhao15personal_2dsite3src4main10page__kind() === 1) {
    _M0FP410sichenzhao15personal_2dsite3src4main12render__blog();
    return;
  } else {
    _M0FP410sichenzhao15personal_2dsite3src4main13render__intro();
    return;
  }
})();
//# sourceMappingURL=main.js.map
