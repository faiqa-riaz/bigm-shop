/* BIG M Merch Shop – Prototyp-Logik (Produktdaten, Warenkorb, Animationen).
   In WooCommerce übernimmt das der Shop selbst; hier nur für die Freigabe-Vorschau. */
(function () {
  "use strict";

  var FREE_SHIPPING = 55;
  var BUNDLE_PRICE = 49.9;
  var IMG = "assets/img/";

  var MEN = ["S", "M", "L", "XL"];
  var WOMEN = ["XS", "S", "M", "L"];
  var SHIRT_STOCK = { Herren: { S: 25, M: 50, L: 50, XL: 25 }, Damen: { XS: 5, S: 20, M: 20, L: 5 } };

  var SHIRT_ACC = [
    { t: "Material & Passform", h: "<ul><li>100 % Bio-Baumwolle, ringgesponnen und gekämmt</li><li>Herren: klassischer Unisex-Schnitt, Damen: figurbetonter Schnitt</li><li>Rundhalsausschnitt mit Rippbündchen</li><li>Nachhaltig und unter fairen Bedingungen produziert</li></ul>" },
    { t: "Pflegehinweise", h: "<ul><li>Auf links waschen, max. 30 °C</li><li>Nicht in den Trockner</li><li>Nicht direkt auf dem Druck bügeln</li></ul>" }
  ];
  var SHIP_ACC = { t: "Versand & Rückgabe", h: "<p>Versand mit DHL. Ab 55 € Bestellwert versenden wir kostenlos. Die genauen Versandkosten und Lieferzeiten siehst du an der Kasse.</p><p>Du hast ein 14-tägiges Widerrufsrecht. Details findest du in der Widerrufsbelehrung.</p>" };

  var PRODUCTS = [
    {
      id: "shirt-mocha", cat: "shirts", catLabel: "T-Shirt", name: "T-Shirt „Big Food Big Love“", short: "Big Food Big Love", price: 39.9,
      color: "Mocha", swatch: "#4B2F25", img: "p86", hover: "p88", cut: ["p86", "p85"],
      gallery: ["p86", "p85", "p88", "p87", "p89"],
      tagline: ["Big Food.", "Big Love."],
      lead: "Der Satz, der alles sagt. Vorne das kleine Big M Logo, hinten der große Print mit Cappy: das Shirt für alle, die Essen nicht nur mögen, sondern lieben.",
      story: "Mocha-Braun, weicher Griff und ein Rückenprint, der auffällt. Gemacht für lange Tage, große Portionen und jeden, der beim Nachschlag nie Nein sagt.",
      storyImg: "p88", variant: "shirt"
    },
    {
      id: "shirt-white", cat: "shirts", catLabel: "T-Shirt", name: "T-Shirt „Sry I was busy“", short: "Sry I was busy", price: 39.9,
      color: "Weiß", swatch: "#FFFFFF", img: "p91", hover: "p95", cut: ["p91", "p90"],
      gallery: ["p91", "p90", "p95", "p92", "p94"],
      tagline: ["Sry, I was", "busy eating."],
      lead: "Die ehrlichste Ausrede der Welt, jetzt zum Anziehen. Handschrift-Print auf dem Rücken, Big M Logo auf der Brust.",
      story: "Strahlend weiß und mit einem Augenzwinkern bedruckt: das Shirt für alle, die beim Essen die Zeit vergessen und dazu stehen.",
      storyImg: "p95", variant: "shirt"
    },
    {
      id: "shirt-black", cat: "shirts", catLabel: "T-Shirt", name: "T-Shirt „Big Mood for Food“", short: "Big Mood for Food", price: 39.9,
      color: "Schwarz", swatch: "#1C1C1C", img: "p97", hover: "p98", cut: ["p97", "p96"],
      gallery: ["p97", "p96", "p98", "p99", "p100"],
      tagline: ["big. mood.", "for. food."],
      lead: "Schwarz, clean und laut zugleich: vorne das Big M Logo, hinten der Burger in allen Schichten.",
      story: "Ein Burger, Schicht für Schicht zerlegt, auf tiefem Schwarz. Für alle, deren Laune direkt vom nächsten Essen abhängt.",
      storyImg: "p98", variant: "shirt"
    },
    {
      id: "cap-hungry", cat: "caps", catLabel: "Cap", name: "Cap „Hungry“", short: "Hungry", price: 25.9,
      color: "Creme / Braun", swatch: "#EFE6D4", img: "p67", hover: "p68", cut: ["p67", "p68", "p69"],
      gallery: ["p67", "p68", "p69"], tag: "Limitiert · 150 Stk.",
      tagline: ["Always", "hungry."],
      lead: "Gebogener Schirm, Verschluss mit Metallschnalle und ein Design, das innen wie außen individuell gestaltet ist.",
      story: "Creme mit braunem Schirm, Hungry-Stick vorne, Big M Logo hinten. Und wer genau hinsieht, entdeckt auch innen ein eigenes Design.",
      storyImg: "p68", variant: "cap",
      details: ["Gebogener Schirm (Curved Brim)", "Verschluss mit Metallschnalle, Einheitsgröße", "Innen und außen individuell gestaltet", "Limitierte Auflage: 150 Stück"]
    },
    {
      id: "cap-ilovefood", cat: "caps", catLabel: "Cap", name: "Cap „I love food“", short: "I love food", price: 25.9,
      color: "Creme / Grün", swatch: "#2F4A35", img: "p59", hover: "p61", cut: ["p59", "p60", "p61", "p62"],
      gallery: ["p59", "p60", "p61", "p62"], tag: "Limitiert · 150 Stk.",
      tagline: ["I love", "food."],
      lead: "Creme mit grünem Schirm und gesticktem Statement. Gebogener Schirm, Metallschnalle, innen und außen gestaltet.",
      story: "Ein Satz, ein Cap, eine klare Haltung. Das I love food Cap passt zu allem, außer zu kleinen Portionen.",
      storyImg: "p61", variant: "cap",
      details: ["Gebogener Schirm (Curved Brim)", "Verschluss mit Metallschnalle, Einheitsgröße", "Innen und außen individuell gestaltet", "Limitierte Auflage: 150 Stück"]
    },
    {
      id: "cap-bigm", cat: "caps", catLabel: "Cap", name: "Cap „Big M“", short: "Big M", price: 29.9,
      color: "Blau", swatch: "#1F3F94", img: "p63", hover: "p66", cut: ["p63", "p64", "p65", "p66"],
      gallery: ["p63", "p64", "p65", "p66"], tag: "Limitiert · 150 Stk.",
      tagline: ["Flat brim.", "Big M."],
      lead: "Gerader Schirm, Snapback-Verschluss und Big M Logo vorne. Innen wartet ein I LOVE FOOD Print.",
      story: "Das Cap im Stil von Big M selbst: tiefblau, gerader Schirm und innen ein Print, der nur dir gehört.",
      storyImg: "p66", variant: "cap",
      details: ["Gerader Schirm (Flat Brim)", "Snapback-Verschluss, Einheitsgröße", "Innen und außen individuell gestaltet", "Limitierte Auflage: 150 Stück"]
    },
    {
      id: "socks", cat: "acc", catLabel: "Socken", name: "Big M Socken", short: "Socken", price: 14.9,
      color: "Weiß / Schwarz", swatch: "linear-gradient(90deg,#fff 50%,#1C1C1C 50%)", img: "p101", hover: "p103", cut: ["p101", "p104"],
      gallery: ["p102", "p101", "p103"], galleryBlack: ["p105", "p104", "p106"], tag: "Bundle-Deal",
      tagline: ["Cappy", "an den Füßen."],
      lead: "Sportsocken mit Cappy-Motiv, in Weiß oder Schwarz und in zwei Größen. Im Bundle mit einem Shirt sparst du 4,90 €.",
      story: "Cappy gehört nicht nur auf den Schlüsselbund. Bequeme Sportsocken für Alltag, Training und die nächste Food-Tour.",
      storyImg: "p103", variant: "socks",
      details: ["Sportsocken mit Cappy-Motiv", "Farben: Weiß, Schwarz", "Größen: 37–41 und 42–46", "Im Bundle mit einem T-Shirt für 49,90 €"]
    },
    {
      id: "keychain", cat: "acc", catLabel: "Schlüsselanhänger", name: "Schlüsselanhänger „Cappy“", short: "Cappy", price: 9.9,
      color: "Blau / Gelb", swatch: "#23AADC", img: "p72", hover: "p75", cut: ["p72"],
      gallery: ["p72", "p75"], tag: "Limitiert · 150 Stk.",
      tagline: ["Cappy", "kommt mit."],
      lead: "Big Ms Maskottchen Cappy aus weichem Gummi, mit Metallring für Schlüssel, Tasche oder Rucksack.",
      story: "Klein, robust und sofort erkennbar. Cappy begleitet dich überall hin und passt in jede Tasche.",
      storyImg: "p75", variant: "single",
      details: ["Weichgummi mit Metallring", "Cappy-Motiv in Blau und Gelb", "Limitierte Auflage: 150 Stück"]
    }
  ];

  var byId = {};
  PRODUCTS.forEach(function (p) { byId[p.id] = p; });

  /* ---------- Helpers ---------- */
  function euro(n) { return n.toFixed(2).replace(".", ",") + " €"; }
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function src(name) { return IMG + name + ".webp"; }
  var ICON = {
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 14H5L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ---------- Cart (localStorage, nur Vorschau) ---------- */
  var KEY = "bigm-cart-v1";
  var cart = [];
  try { cart = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { cart = []; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) { /* privat / blockiert */ } }

  function addToCart(item) {
    var found = cart.filter(function (l) { return l.key === item.key; })[0];
    if (found) found.qty += item.qty; else cart.push(item);
    save(); renderCart(); bump();
  }
  function cartCount() { return cart.reduce(function (s, l) { return s + l.qty; }, 0); }
  function cartTotal() { return cart.reduce(function (s, l) { return s + l.qty * l.price; }, 0); }

  function bump() {
    $$(".sm-cart-trigger").forEach(function (b) { b.classList.remove("is-bump"); void b.offsetWidth; b.classList.add("is-bump"); });
  }

  function renderCart() {
    $$("[data-cart-count]").forEach(function (el) { el.textContent = cartCount(); });
    var list = $("[data-cart-items]");
    if (!list) return;
    var total = cartTotal();
    var rest = Math.max(0, FREE_SHIPPING - total);
    var ship = $("[data-ship]");
    ship.classList.toggle("is-free", rest === 0 && total > 0);
    $("[data-ship-text]").innerHTML = rest === 0 && total > 0
      ? "<b>Glückwunsch!</b> Dein Versand ist kostenlos."
      : "Noch <b>" + euro(rest) + "</b> bis zum kostenlosen Versand";
    $("[data-ship-fill]").style.width = Math.min(100, (total / FREE_SHIPPING) * 100) + "%";

    if (!cart.length) {
      list.innerHTML = '<div class="drawer__empty"><img src="' + src("p72") + '" alt=""><p><b>Dein Warenkorb ist noch leer.</b><br>Cappy wartet schon auf dich.</p></div>';
    } else {
      list.innerHTML = cart.map(function (l, i) {
        return '<div class="line-item"><img class="line-item__img" src="' + src(l.img) + '" alt="">' +
          '<div><h5>' + l.name + '</h5><p>' + (l.meta || "&nbsp;") + '</p>' +
          '<div class="stepper" role="group" aria-label="Menge"><button type="button" data-dec="' + i + '" aria-label="Weniger">–</button><span>' + l.qty + '</span><button type="button" data-inc="' + i + '" aria-label="Mehr">+</button></div></div>' +
          '<div><div class="line-item__price">' + euro(l.price * l.qty) + '</div><button class="line-item__remove" type="button" data-rm="' + i + '">Entfernen</button></div></div>';
      }).join("");
    }
    $("[data-subtotal]").textContent = euro(total);
    $("[data-checkout]").disabled = !cart.length;
  }

  function openCart() { $(".drawer").classList.add("is-open"); $(".scrim").classList.add("is-open"); $(".drawer [data-close]").focus(); }
  function closeCart() { $(".drawer").classList.remove("is-open"); $(".scrim").classList.remove("is-open"); }

  var toastTimer;
  function toast(msg) {
    var t = $(".toast"); if (!t) return;
    t.textContent = msg; t.classList.add("is-show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("is-show"); }, 2600);
  }

  function bindGlobal() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-open-cart],[data-close],[data-inc],[data-dec],[data-rm],[data-quick],[data-checkout]");
      if (!t) return;
      if (t.hasAttribute("data-open-cart")) { openCart(); }
      else if (t.hasAttribute("data-close")) { closeCart(); }
      else if (t.hasAttribute("data-inc")) { cart[+t.dataset.inc].qty++; save(); renderCart(); }
      else if (t.hasAttribute("data-dec")) { var l = cart[+t.dataset.dec]; l.qty--; if (l.qty < 1) cart.splice(+t.dataset.dec, 1); save(); renderCart(); }
      else if (t.hasAttribute("data-rm")) { cart.splice(+t.dataset.rm, 1); save(); renderCart(); }
      else if (t.hasAttribute("data-quick")) {
        e.preventDefault();
        var p = byId[t.dataset.quick];
        if (p.variant === "cap" || p.variant === "single") {
          addToCart({ key: p.id, id: p.id, name: p.name, meta: p.variant === "cap" ? "Einheitsgröße" : "", price: p.price, img: p.img, qty: 1 });
          toast(p.short + " liegt im Warenkorb"); openCart();
        } else { location.href = "produkt.html?p=" + p.id; }
      }
      else if (t.hasAttribute("data-checkout")) { toast("Vorschau: Der Checkout wird in WooCommerce umgesetzt."); }
    });
    var scrim = $(".scrim"); if (scrim) scrim.addEventListener("click", closeCart);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeCart(); });
  }

  /* ---------- Product card ---------- */
  function cardHTML(p) {
    var quickLabel = (p.variant === "cap" || p.variant === "single") ? "In den Warenkorb" : "Optionen wählen";
    var tagCls = p.tag === "Bundle-Deal" ? " card__tag--blue" : " card__tag--yellow";
    return '<article class="card" data-cat="' + p.cat + '">' +
      '<a class="card__media" href="produkt.html?p=' + p.id + '" tabindex="-1" aria-hidden="true">' +
      (p.tag ? '<span class="card__tag' + tagCls + '">' + p.tag + '</span>' : "") +
      '<img class="card__img" src="' + src(p.img) + '" alt="" loading="lazy" width="800" height="1000">' +
      '<img class="card__hover" src="' + src(p.hover) + '" alt="" loading="lazy" width="800" height="1000"></a>' +
      '<button class="card__quick" type="button" data-quick="' + p.id + '" aria-label="' + p.short + ': ' + quickLabel + '">' + (p.variant === "cap" || p.variant === "single" ? ICON.plus : ICON.arrow) + '</button>' +
      '<div class="card__body"><span class="card__cat">' + p.catLabel + ' · ' + p.color + '</span>' +
      '<h3 class="card__title"><a href="produkt.html?p=' + p.id + '">' + p.name + '</a></h3>' +
      '<div class="card__row"><span class="price">' + euro(p.price) + '<small>inkl. MwSt.</small></span>' +
      '<span class="swatches" aria-hidden="true"><i style="background:' + p.swatch + '"></i></span></div></div></article>';
  }

  /* ---------- Shop page ---------- */
  function initShop() {
    var grid = $("[data-grid]"); if (!grid) return;
    grid.innerHTML = PRODUCTS.map(cardHTML).join("");
    var counts = { all: PRODUCTS.length, shirts: 0, caps: 0, acc: 0 };
    PRODUCTS.forEach(function (p) { counts[p.cat]++; });
    $$(".chip").forEach(function (c) {
      c.insertAdjacentHTML("beforeend", "<small>" + counts[c.dataset.filter] + "</small>");
      c.addEventListener("click", function () {
        $$(".chip").forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
        var f = c.dataset.filter, n = 0;
        $$(".card", grid).forEach(function (card) { var show = f === "all" || card.dataset.cat === f; card.hidden = !show; if (show) n++; });
        $("[data-result]").textContent = n + (n === 1 ? " Produkt" : " Produkte");
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      });
    });
    // Deep links from the header's Shop dropdown, e.g. shop.html?kat=caps
    var kat = new URLSearchParams(location.search).get("kat");
    var chip = kat && $('.chip[data-filter="' + kat + '"]');
    if (chip) chip.click();
  }

  /* ---------- Accordion: immer nur ein Punkt offen, Höhe per CSS-Transition animiert ----------
     Die <details> bleiben technisch offen, damit der Inhalt animiert werden kann; sichtbar ist nur
     der Punkt mit .is-open. Geschlossene Inhalte sind inert (nicht fokussierbar, nicht vorgelesen). */
  function initAccordion(root) {
    var items = $$("details", root);
    function set(d, open) {
      var body = d.querySelector(".acc__body"), sum = d.querySelector("summary");
      d.classList.toggle("is-open", open);
      sum.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) body.removeAttribute("inert"); else body.setAttribute("inert", "");
    }
    items.forEach(function (d) {
      d.open = true;
      set(d, d.classList.contains("is-open"));
      d.querySelector("summary").addEventListener("click", function (e) {
        e.preventDefault();
        var opening = !d.classList.contains("is-open");
        items.forEach(function (o) { if (o !== d) set(o, false); });
        set(d, opening);
      });
    });
  }

  /* ---------- Header menu (Shortcode-Skript der Live-Seite) ---------- */
  function initMenu() {
    var containers = $$(".sm-menu-bar .sm-menu-container");
    function closeAll() {
      containers.forEach(function (c) {
        var t = c.querySelector("[data-sm-trigger]"), d = c.querySelector("[data-sm-dropdown]");
        if (t) { t.classList.remove("sm-active"); t.setAttribute("aria-expanded", "false"); }
        if (d) d.classList.remove("sm-active");
      });
    }
    containers.forEach(function (c) {
      var trigger = c.querySelector("[data-sm-trigger]"), dropdown = c.querySelector("[data-sm-dropdown]");
      if (!trigger || !dropdown) return;
      trigger.addEventListener("click", function (e) {
        e.preventDefault(); e.stopPropagation();
        var wasActive = trigger.classList.contains("sm-active");
        closeAll();
        if (!wasActive) { trigger.classList.add("sm-active"); trigger.setAttribute("aria-expanded", "true"); dropdown.classList.add("sm-active"); }
      });
    });
    $$(".sm-menu-bar .sm-menu-item").forEach(function (item) { item.addEventListener("click", closeAll); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });
    document.addEventListener("click", closeAll);
  }

  /* ---------- Product page ---------- */
  function initProduct() {
    var root = $("[data-pdp]"); if (!root) return;
    var id = new URLSearchParams(location.search).get("p") || "shirt-mocha";
    var p = byId[id] || byId["shirt-mocha"];
    var state = { cut: "Herren", size: null, color: "Weiß", sockSize: "42–46", qty: 1, bundle: false, bColor: "Weiß", bSize: "42–46" };

    document.title = p.name + " | BIG M Shop";
    $("[data-crumb-cat]").textContent = p.catLabel + (p.cat === "shirts" ? "s" : p.cat === "caps" ? "s" : "");
    $("[data-crumb-name]").textContent = p.name;
    $("[data-title]").textContent = p.name;
    $("[data-cat]").textContent = p.catLabel + " · " + p.color;
    $("[data-price]").textContent = euro(p.price);
    $("[data-lead]").textContent = p.lead;
    $("[data-sticky-name]").textContent = p.name;

    function gallery(list) {
      var cut = p.cut || [];
      var track = $("[data-track]"), thumbs = $("[data-thumbs]"), dots = $("[data-dots]");
      track.innerHTML = list.map(function (g, i) {
        return '<div class="gallery__slide' + (cut.indexOf(g) > -1 ? " is-cut" : "") + '"><img src="' + src(g) + '" alt="' + p.name + ', Bild ' + (i + 1) + '" width="1000" height="1000"' + (i ? ' loading="lazy"' : "") + '></div>';
      }).join("");
      thumbs.innerHTML = list.map(function (g, i) {
        return '<button class="gallery__thumb' + (cut.indexOf(g) > -1 ? " is-cut" : "") + '" type="button" data-go="' + i + '" aria-label="Bild ' + (i + 1) + '"' + (i ? "" : ' aria-current="true"') + '><img src="' + src(g) + '" alt=""></button>';
      }).join("");
      dots.innerHTML = list.map(function (_, i) { return '<i' + (i ? "" : ' class="is-on"') + '></i>'; }).join("");
      track.scrollLeft = 0;
    }
    function current() { var t = $("[data-track]"); return Math.round(t.scrollLeft / t.clientWidth); }
    function go(i) {
      var t = $("[data-track]"), n = t.children.length;
      i = (i + n) % n; t.scrollTo({ left: i * t.clientWidth, behavior: "smooth" });
    }
    $("[data-track]").addEventListener("scroll", function () {
      var i = current();
      $$("[data-go]").forEach(function (b, k) { b.setAttribute("aria-current", k === i ? "true" : "false"); });
      $$("[data-dots] i").forEach(function (d, k) { d.classList.toggle("is-on", k === i); });
    }, { passive: true });
    root.addEventListener("click", function (e) {
      var g = e.target.closest("[data-go]"); if (g) go(+g.dataset.go);
      if (e.target.closest("[data-prev]")) go(current() - 1);
      if (e.target.closest("[data-next]")) go(current() + 1);
    });
    gallery(p.variant === "socks" ? p.gallery : p.gallery);

    /* Options */
    var opts = $("[data-opts]");
    function seg(name, values, active) {
      return '<div class="seg" role="group" aria-label="' + name + '">' + values.map(function (v) {
        return '<button type="button" data-' + name + '="' + v + '" aria-pressed="' + (v === active) + '">' + v + '</button>';
      }).join("") + "</div>";
    }
    function shirtOpts() {
      var sizes = state.cut === "Herren" ? MEN : WOMEN;
      var stock = SHIRT_STOCK[state.cut];
      var designs = PRODUCTS.filter(function (x) { return x.cat === "shirts"; });
      opts.innerHTML =
        '<div class="opt"><div class="opt__label">Design <span>' + p.color + '</span></div><div class="colors">' +
        designs.map(function (d) {
          return '<a class="color" href="produkt.html?p=' + d.id + '"' + (d.id === p.id ? ' aria-current="true"' : "") + '><i style="background:' + d.swatch + '"></i>' + d.short + "</a>";
        }).join("") + "</div></div>" +
        '<div class="opt"><div class="opt__label">Schnitt</div>' + seg("cut", ["Herren", "Damen"], state.cut) + "</div>" +
        '<div class="opt"><div class="opt__label">Größe <span data-size-label>' + (state.size || "Bitte wählen") + "</span></div>" +
        '<div class="sizes">' + sizes.map(function (s) {
          var n = stock[s];
          return '<button type="button" class="size' + (n <= 5 ? " is-low" : "") + '" data-size="' + s + '" aria-pressed="' + (s === state.size) + '"' + (n ? "" : " disabled") + ">" + s + "</button>";
        }).join("") + "</div></div>";
    }
    function socksOpts() {
      opts.innerHTML =
        '<div class="opt"><div class="opt__label">Farbe <span>' + state.color + '</span></div><div class="colors">' +
        [["Weiß", "#FFFFFF"], ["Schwarz", "#1C1C1C"]].map(function (c) {
          return '<button type="button" class="color" data-color="' + c[0] + '" aria-pressed="' + (c[0] === state.color) + '"><i style="background:' + c[1] + '"></i>' + c[0] + "</button>";
        }).join("") + "</div></div>" +
        '<div class="opt"><div class="opt__label">Größe</div>' + seg("sock", ["37–41", "42–46"], state.sockSize) + "</div>";
    }
    function capOpts() {
      opts.innerHTML = '<div class="opt"><div class="opt__label">Größe <span>Einheitsgröße, verstellbar</span></div></div>';
    }
    function renderOpts() {
      if (p.variant === "shirt") shirtOpts(); else if (p.variant === "socks") socksOpts(); else if (p.variant === "cap") capOpts(); else opts.innerHTML = "";
      renderStock();
    }
    function renderStock() {
      var s = $("[data-stock]");
      s.classList.remove("is-hint");
      if (p.variant === "shirt" && state.size) {
        var n = SHIRT_STOCK[state.cut][state.size];
        s.classList.toggle("is-low", n <= 5);
        s.textContent = n <= 5 ? "Nur noch wenige verfügbar" : "Auf Lager, Versand mit DHL";
      } else if (p.variant === "shirt") { s.classList.remove("is-low"); s.classList.add("is-hint"); s.textContent = "Wähle deine Größe"; }
      else { s.classList.remove("is-low"); s.textContent = "Auf Lager, Versand mit DHL"; }
    }
    opts.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.cut) { state.cut = b.dataset.cut; state.size = null; renderOpts(); }
      else if (b.dataset.size) { state.size = b.dataset.size; renderOpts(); }
      else if (b.dataset.color) { state.color = b.dataset.color; renderOpts(); gallery(state.color === "Weiß" ? p.gallery : p.galleryBlack); }
      else if (b.dataset.sock) { state.sockSize = b.dataset.sock; renderOpts(); }
    });
    renderOpts();

    /* Bundle upsell (nur bei Shirts) */
    var up = $("[data-upsell]");
    if (p.variant === "shirt") {
      up.hidden = false;
      var sw = $("[data-bundle]", up);
      sw.addEventListener("change", function () { state.bundle = sw.checked; up.classList.toggle("is-on", sw.checked); updatePrice(); });
      up.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        if (b.dataset.bcolor) { state.bColor = b.dataset.bcolor; $$("[data-bcolor]", up).forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); $("[data-bimg]", up).src = src(b.dataset.bcolor === "Weiß" ? "p101" : "p104"); }
        if (b.dataset.bsize) { state.bSize = b.dataset.bsize; $$("[data-bsize]", up).forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); }
      });
      if (location.hash === "#bundle") { sw.checked = true; sw.dispatchEvent(new Event("change")); }
    }

    /* Quantity */
    var qtyEl = $("[data-qty]");
    root.addEventListener("click", function (e) {
      if (e.target.closest("[data-qminus]")) { state.qty = Math.max(1, state.qty - 1); qtyEl.textContent = state.qty; updatePrice(); }
      if (e.target.closest("[data-qplus]")) { state.qty = Math.min(10, state.qty + 1); qtyEl.textContent = state.qty; updatePrice(); }
    });
    function unit() { return state.bundle ? BUNDLE_PRICE : p.price; }
    function updatePrice() {
      $("[data-price]").textContent = euro(unit());
      $("[data-was]").textContent = state.bundle ? euro(p.price + byId.socks.price) : "";
      $("[data-sticky-price]").textContent = euro(unit() * state.qty);
      $("[data-add-label]").textContent = "In den Warenkorb · " + euro(unit() * state.qty);
    }
    updatePrice();

    function add() {
      if (p.variant === "shirt" && !state.size) {
        toast("Bitte wähle zuerst deine Größe");
        var sz = $(".sizes"); if (sz) { sz.scrollIntoView({ behavior: "smooth", block: "center" }); }
        return;
      }
      var meta, key;
      if (p.variant === "shirt") {
        meta = state.cut + " · " + state.size;
        if (state.bundle) {
          meta += " + Socken " + state.bColor + " " + state.bSize;
          addToCart({ key: "bundle-" + p.id + meta, name: "Bundle: " + p.short + " + Socken", meta: meta, price: BUNDLE_PRICE, img: p.img, qty: state.qty });
          toast("Bundle liegt im Warenkorb. Du sparst 4,90 €"); openCart(); return;
        }
      } else if (p.variant === "socks") meta = state.color + " · " + state.sockSize;
      else if (p.variant === "cap") meta = "Einheitsgröße";
      else meta = "";
      key = p.id + meta;
      addToCart({ key: key, name: p.name, meta: meta, price: p.price, img: p.variant === "socks" && state.color === "Schwarz" ? "p105" : p.img, qty: state.qty });
      toast(p.short + " liegt im Warenkorb"); openCart();
    }
    $$("[data-add]").forEach(function (b) { b.addEventListener("click", add); });

    /* Accordions */
    var acc = [{ t: "Beschreibung", h: "<p>" + p.story + "</p>" }];
    if (p.variant === "shirt") acc = acc.concat(SHIRT_ACC);
    else acc.push({ t: "Details", h: "<ul>" + p.details.map(function (d) { return "<li>" + d + "</li>"; }).join("") + "</ul>" });
    acc.push(SHIP_ACC);
    $("[data-acc]").innerHTML = acc.map(function (a, i) {
      return "<details" + (i ? "" : ' open class="is-open"') + "><summary>" + a.t + ICON.plus + '</summary><div class="acc__body"><div class="acc__inner">' + a.h + "</div></div></details>";
    }).join("");
    initAccordion($("[data-acc]"));

    /* Story band */
    $("[data-tagline]").innerHTML = p.tagline[0] + '<br><span class="hl-yellow">' + p.tagline[1] + "</span>";
    $("[data-story]").textContent = p.story;
    $("[data-story-img]").src = src(p.storyImg);
    $("[data-story-img]").alt = p.name + " getragen";
    var feats = p.variant === "shirt"
      ? [["Bio-Baumwolle", "100 % Bio-Baumwolle, nachhaltig und fair produziert."], ["Herren & Damen", "Herren S bis XL, Damen XS bis L."], ["Im Bundle sparen", "Mit Socken zusammen für nur 49,90 €."]]
      : p.variant === "cap"
        ? [["Innen & außen gestaltet", "Ein eigenes Design auch unter dem Schirm."], ["Einheitsgröße", p.details[1]], ["Limitiert", "Nur 150 Stück pro Design."]]
        : p.variant === "socks"
          ? [["Zwei Farben", "Weiß oder Schwarz, beide mit Cappy."], ["Zwei Größen", "37–41 und 42–46."], ["Bundle-Deal", "Mit einem Shirt zusammen für 49,90 €."]]
          : [["Weichgummi", "Robust und angenehm in der Hand."], ["Mit Metallring", "Für Schlüssel, Tasche oder Rucksack."], ["Limitiert", "Nur 150 Stück."]];
    var ficons = [
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/></svg>',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.4 4.6 16 3a4 4 0 0 1-8 0L3.6 4.6a1 1 0 0 0-.6 1.2l1.2 3.6a1 1 0 0 0 1.2.6L7 9.6V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.6l1.6.4a1 1 0 0 0 1.2-.6L21 5.8a1 1 0 0 0-.6-1.2z"/></svg>',
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>'
    ];
    $("[data-feats]").innerHTML = feats.map(function (f, i) {
      return '<li><span class="feats__ico">' + ficons[i] + "</span><div><b>" + f[0] + "</b><span>" + f[1] + "</span></div></li>";
    }).join("");

    /* Recommendations */
    var order = { shirts: ["socks", "cap-bigm", "keychain", "cap-hungry"], caps: ["shirt-mocha", "socks", "keychain", "shirt-black"], acc: ["shirt-mocha", "shirt-white", "cap-ilovefood", "cap-bigm"] };
    var recs = order[p.cat].filter(function (r) { return r !== p.id; });
    if (p.id === "socks") recs = ["shirt-mocha", "shirt-white", "shirt-black", "keychain"];
    if (p.id === "keychain") recs = ["socks", "shirt-mocha", "cap-hungry", "cap-bigm"];
    $("[data-recs]").innerHTML = recs.slice(0, 4).map(function (r) { return cardHTML(byId[r]); }).join("");

    /* Mobile sticky bar */
    var sticky = $(".sticky-buy"), mainBtn = $("[data-add-main]");
    if (sticky && "IntersectionObserver" in window) {
      document.body.classList.add("has-sticky");
      new IntersectionObserver(function (en) { sticky.classList.toggle("is-show", !en[0].isIntersecting && en[0].boundingClientRect.top < 0); }).observe(mainBtn);
    }
  }

  /* ---------- Motion (GSAP) ---------- */
  function initMotion() {
    if (!window.gsap || matchMedia("(prefers-reduced-motion: reduce)").matches || /[?&]static/.test(location.search)) return;
    var gsap = window.gsap;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    // Hero entrance + floating product pieces
    var lines = $$(".hero__title");
    if (lines.length) {
      gsap.from(lines, { y: 40, opacity: 0, duration: 1, ease: "expo.out", delay: .1 });
      gsap.from(".hero__lead, .hero__ctas", { y: 24, opacity: 0, duration: .9, ease: "expo.out", stagger: .1, delay: .45 });
      gsap.from(".hero__piece", { y: 80, opacity: 0, scale: .85, duration: 1.2, ease: "expo.out", stagger: .1, delay: .3 });
      $$(".hero__piece").forEach(function (el, i) {
        gsap.to(el, { y: i % 2 ? 14 : -14, duration: 2.6 + i * .4, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.4 });
      });
    }

    if (!window.ScrollTrigger) return;
    var ST = window.ScrollTrigger;

    // Cards reveal in batches
    gsap.set(".grid .card", { y: 40, opacity: 0 });
    ST.batch(".grid .card", {
      start: "top 92%",
      onEnter: function (b) { gsap.to(b, { y: 0, opacity: 1, duration: .9, ease: "expo.out", stagger: .08, overwrite: true }); }
    });

    $$(".tile, .bundle__plate, .feats li").forEach(function (el) {
      gsap.from(el, { y: 50, opacity: 0, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
    });

    // Lookbook title pin is CSS sticky (.look__pin); images stay static on scroll

    // Word-by-word scrub
    var st = $(".statement__text");
    if (st) {
      st.innerHTML = st.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + "</span>"; }).join(" ");
      gsap.fromTo($$(".w", st), { opacity: .12 }, { opacity: 1, stagger: .05, ease: "none", scrollTrigger: { trigger: st, start: "top 80%", end: "bottom 45%", scrub: true } });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindGlobal();
    initMenu();
    initShop();
    initProduct();
    renderCart();
    initMotion();
  });
})();
