/**
 * <ig-feed src="https://sunday-instagram-feed.<konto>.workers.dev/feed"
 *          limit="6" profile="https://www.instagram.com/KONTO/"></ig-feed>
 *
 * Wygląd sterujesz zmiennymi CSS na elemencie:
 *   --ig-cols (domyślnie 6), --ig-cols-sm (3, poniżej 700 px), --ig-gap (0),
 *   --ig-border (1px solid #0b0b0b), --ig-focus (kolor obramowania fokusu),
 *   --ig-ratio (proporcje kafelka: 1 = kwadrat, 4/5 = pionowy jak post na IG),
 *   --ig-radius (zaokrąglenie rogów kafelka, domyślnie 0)
 */
const STYLE = `
:host{display:block}
.grid{display:grid;grid-template-columns:repeat(var(--ig-cols,6),1fr);gap:var(--ig-gap,0);
  border:var(--ig-border,1px solid #0b0b0b)}
@media (max-width:700px){.grid{grid-template-columns:repeat(var(--ig-cols-sm,3),1fr)}}
.grid a{position:relative;display:block;aspect-ratio:var(--ig-ratio,1);overflow:hidden;background:#e9eded;
  border-radius:var(--ig-radius,0);
  outline:var(--ig-border,1px solid #0b0b0b);outline-offset:-.5px}
img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
.grid a:hover img,.grid a:focus-visible img{transform:scale(1.05)}
.grid a:focus-visible{outline:3px solid var(--ig-focus,#ff5ea2);outline-offset:-3px}
.play{position:absolute;right:8px;top:8px;width:22px;height:22px;fill:#fff;
  filter:drop-shadow(0 0 3px rgba(0,0,0,.6))}
@media (prefers-reduced-motion:reduce){img{transition:none}}
`;

class IgFeed extends HTMLElement {
  connectedCallback() {
    this.root ??= this.attachShadow({ mode: "open" });
    this.load();
  }

  async load() {
    const limit = Number(this.getAttribute("limit")) || 6;
    const src = this.getAttribute("src");
    try {
      let data;
      if (src.startsWith("data:")) {
        // Dane wbudowane w adres (np. makieta otwierana z dysku, gdzie fetch bywa blokowany).
        data = JSON.parse(decodeURIComponent(src.slice(src.indexOf(",") + 1)));
      } else {
        const res = await fetch(src);
        if (!res.ok) throw new Error(String(res.status));
        data = await res.json();
      }
      this.render(data.items.slice(0, limit));
    } catch {
      this.renderFallback();
    }
  }

  render(items) {
    const style = document.createElement("style");
    style.textContent = STYLE;
    const grid = document.createElement("div");
    grid.className = "grid";

    for (const item of items) {
      const a = document.createElement("a");
      a.href = item.permalink;
      a.target = "_blank";
      a.rel = "noopener";
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.caption || "Post z Instagrama";
      img.loading = "lazy";
      img.referrerPolicy = "no-referrer";
      a.append(img);
      if (item.type === "VIDEO") {
        a.insertAdjacentHTML(
          "beforeend",
          '<svg class="play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
        );
      }
      grid.append(a);
    }
    this.root.replaceChildren(style, grid);
  }

  // Przy awarii API nie zostawiamy dziury na stronie: zostaje sam link do profilu.
  renderFallback() {
    const profile = this.getAttribute("profile");
    if (!profile) return this.root.replaceChildren();
    const a = document.createElement("a");
    a.href = profile;
    a.textContent = "Zobacz nas na Instagramie";
    this.root.replaceChildren(a);
  }
}

customElements.define("ig-feed", IgFeed);
