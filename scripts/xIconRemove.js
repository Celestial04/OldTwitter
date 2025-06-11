setInterval(() => {
    let xIcon = document.querySelector('a[href^="https://twitter.com/home"] > div > svg, a[href^="https://x.com/home"] > div > svg, a[href^="https://x.com/i/premium_sign_up"] > div > div[class="css-175oi2r"] > svg');
    if (xIcon) {
        let parent = xIcon.parentElement;
        let img = document.createElement('img');
        img.src = chrome.runtime.getURL('images/logo32_new.png');
        img.style.cssText = 'width: 2em;height: 2em;image-rendering: -webkit-optimize-contrast;';
        parent.appendChild(img);
        xIcon.remove();
    };

    // 🧁 Dictionnaire avec les mots à remplacer et où les remplacer exactement
    const remplacements = {
        "X": {
            remplacedBy: "Twitter",
            dans: "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-aqfbo4.r-10f7w94.r-1hycxz > div > div.css-175oi2r.r-1hycxz.r-gtdqiz > div > div > div > div:nth-child(3) > div.css-175oi2r.r-1wtj0ep.r-1mmae3n.r-3pj75a.r-1ny4l3l > h2 > div.css-146c3p1.r-8akbws.r-krxsd3.r-dnmrzs.r-1udh08x.r-1udbk01.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-adyw6z.r-135wba7.r-1vr29t4.r-1kihuf0 > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div:nth-child(5) > div > span:nth-child(4) > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-6413gk.r-bnwqim.r-13qz1uu > div > div > div, #layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-17gur6a.r-1pi2tsx.r-13qz1uu > div > div.css-175oi2r.r-1awozwy.r-13awgt0.r-f8sm7e.r-11c0sde.r-wech8c.r-3pj75a.r-13qz1uu > div.css-175oi2r.r-1cszgra.r-18u37iz.r-f4gmv6.r-1777fci.r-11c0sde.r-13qz1uu > button:nth-child(2) > div > div > div.css-175oi2r.r-16y2uox.r-1wzrnnt > div:nth-child(7) > div > span, #layers > div:nth-child(2) > div > div > div > div > div > div.css-175oi2r.r-1ny4l3l.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv.r-1awozwy > div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-17gur6a.r-1pi2tsx.r-13qz1uu > div > div.css-175oi2r.r-1awozwy.r-13awgt0.r-f8sm7e.r-11c0sde.r-wech8c.r-3pj75a.r-13qz1uu > div.css-175oi2r.r-1wngk81.r-ibla3m.r-13qz1uu.r-1oct78k > div:nth-child(4) > div:nth-child(9) > div:nth-child(1) > div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41 > span, #layers > div.css-175oi2r.r-zchlnj.r-1d2f490.r-u8s1d.r-ipm5af.r-1p0dtai.r-105ug2t > div > div > div.css-175oi2r.r-u8s1d > div > div.css-175oi2r.r-1ny4l3l > div > div > div > div > div > div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-1blvdjr.r-vrz42v.r-majxgm > span, #layers > div.css-175oi2r.r-zchlnj.r-1d2f490.r-u8s1d.r-ipm5af.r-1p0dtai.r-105ug2t > div > div > div.css-175oi2r.r-u8s1d > div > div.css-175oi2r.r-1ny4l3l > div > div > div > div > div > div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-knv0ih > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-6413gk.r-bnwqim.r-13qz1uu > div > div > div > div > div.css-175oi2r.r-eqz5dr.r-13qz1uu > div.css-146c3p1.r-bcqeeo.r-qvutc0.r-37j5jr.r-q4m81j.r-uho16t.r-nwxazl.r-majxgm > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-6413gk.r-bnwqim.r-13qz1uu > div > div > div > div > div.css-175oi2r.r-eqz5dr.r-13qz1uu > div.css-146c3p1.r-bcqeeo.r-qvutc0.r-37j5jr.r-q4m81j.r-adyw6z.r-135wba7.r-16dba41 > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-6413gk.r-bnwqim.r-13qz1uu > div > div > div > div > div.css-175oi2r.r-1habvwh.r-18u37iz.r-1w6e6rj.r-e6ktq0.r-1777fci.r-12kyg2d.r-1yaouiw > div:nth-child(1) > div:nth-child(3) > div > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > section:nth-child(2) > div.css-175oi2r.r-qocrb3.r-kemksi.r-1h0z5md.r-1jx8gzb.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > a:nth-child(3) > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2 > div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-n6v787.r-1cwl3u0.r-16dba41 > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > section:nth-child(2) > div.css-175oi2r.r-qocrb3.r-kemksi.r-1h0z5md.r-1jx8gzb.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > a:nth-child(3) > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2 > div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-n6v787.r-1cwl3u0.r-16dba41 > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > section:nth-child(2) > div.css-175oi2r.r-qocrb3.r-kemksi.r-1h0z5md.r-1jx8gzb.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div > span, #react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > section:nth-child(2) > div.css-175oi2r.r-qocrb3.r-kemksi.r-1h0z5md.r-1jx8gzb.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > a:nth-child(2) > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2 > div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-n6v787.r-1cwl3u0.r-16dba41 > span, #id__pm2359y27i, #id__bbqtwvip0kw"
        },
        "X Corp": {
            remplacedBy: "Twitter Inc",
            dans: "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-aqfbo4.r-10f7w94.r-1hycxz > div > div.css-175oi2r.r-1hycxz.r-gtdqiz > div > div > div > div.css-175oi2r.r-1kqtdi0.r-1867qdf.r-1phboty.r-1ifxtd0.r-1udh08x.r-1niwhzg.r-1yadl64 > nav > div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-1gkfh8e.r-56xrmm.r-16dba41.r-1kihuf0.r-1xuzw63.r-faml9v > span"
        },
        "": {
            remplacedBy: "konnichiwa~",
            dans: "#accueil" // 🔍 uniquement dans l’élément avec l’ID accueil
        },
        "chat": {
            remplacedBy: "chien trop mignon",
            dans: "div.animaux" // 🔍 uniquement dans les <div class="animaux">
        }
    };

    // 🪄 Fonction magique de remplacement ciblé
    for (const [mot, { remplacedBy, dans }] of Object.entries(remplacements)) {
        const elements = document.querySelectorAll(dans);
        elements.forEach((element) => {
            element.childNodes.forEach((child) => {
                if (child.nodeType === Node.TEXT_NODE && child.textContent.includes(mot)) {
                    const regex = new RegExp(mot, "gi");
                    child.textContent = child.textContent.replace(regex, remplacedBy);
                }
            });
        });
    }
    let title = document.querySelector('title');
    if (title) {
        if (title.innerText.endsWith(' / X')) {
            title.innerText = title.innerText.replace(' / X', ' / Twitter');
        }
    }
}, 215);



function removeAndReplaceX(element) {
    if (element) {
        let parent = element.parentElement;
        let img = document.createElement('img');
        img.src = chrome.runtime.getURL('images/logo32_new.png');
        img.style.cssText = 'width: 2em;height: 2em;image-rendering: -webkit-optimize-contrast;display: block;top: 50%;position: absolute;left: 50%;transform: translate(-50%, -50%);';
        parent.appendChild(img);
        element.remove();
        xObserver.disconnect();

        setTimeout(() => {
            img.remove();
        }, 500);
    };
}

const xObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.tagName === 'SVG') {
                        removeAndReplaceX(node);
                    }
                    node.querySelectorAll('svg').forEach(removeAndReplaceX);
                }
            });
        }
    });
});

// Start observing the page for changes
xObserver.observe(document.documentElement, { childList: true, subtree: true });