/**
 * Docsify plugin for adding toc of each page.
 * author: Ragina Jeon
 *
 * Modified by Bowserinator
 */

let defaultOptions = {
    tocMaxLevel: 3,
    target: 'h2, h3',
    sideScrollUpdateInterval: 70
};


/**
 * Collects headings and compiles into HTML
 * @return {string} Compiled html
 */
function pageToC() {
    let headings = document.querySelectorAll(`.markdown-section ${window.$docsify['page-toc'].target}`);
    let toc_top = 
`<div class="page-toc">
 <p class="_title">Contents</p>`;

    let list = [];
    if (headings) {
        headings.forEach(heading => {
            let item = generateToC(heading.tagName.replace(/h/gi, ''), heading.innerHTML);
            if (item)
                list.push(item);
        });
    }

    if (list.length) {
        return `${toc_top}
            ${list.join('\n')}
            </div>`;
    }
    return '';
}


/**
 * Generates an individual ToC item from heading data
 *
 * @param level {number} Heading level, ie h1 => 1
 * @param html {string} innerHTML of the heading
 */
function generateToC(level, html) {
    const settings = window.$docsify['page-toc'];

    if (level > 0 && level <= settings.tocMaxLevel) {
        // Extra hack for hellomouse docs
        html = html.replace(/<span [A-Za-z""=0-9-]+>(.*?)<\/span>/g, '');
        // End hack

        return `<div class="lv${level} toc-link">${html}</div>`;
    }
    return "";
}


/**
 * Main docsify plugin function
 * @param hook
 * @param vm
 */
function plugin(hook, vm) {
    hook.mounted(function () {
        let content = window.Docsify.dom.find('.content');
        if (content) {
            let nav = window.Docsify.dom.create('aside', '');
            window.Docsify.dom.toggleClass(nav, 'add', 'nav');
            window.Docsify.dom.before(content, nav);
        }
    });
    hook.doneEach(function () {
        let nav = window.Docsify.dom.find('.nav');
        if (nav) {
            nav.innerHTML = pageToC().trim();
            if (nav.innerHTML === '') {
                window.Docsify.dom.toggleClass(nav, 'add', 'nothing');
            } else {
                window.Docsify.dom.toggleClass(nav, 'remove', 'nothing');
            }
        }
    });
}


// Add plugin to docsify plugin array
window.$docsify['page-toc'] = Object.assign(defaultOptions, window.$docsify['page-toc']);
window.$docsify.plugins = window.$docsify.plugins.concat(plugin);


// Dynamic scroll indicator
let headings = [];
let toc_links = [];
let toc_link_urls = [];

let headers_to_search = window.$docsify['page-toc'].target.split(', ');
let re_compute = true;
let count = 0;


setInterval(() => {
    // For some reason polling for window location changes isn't reliable in doscify
    // So we just re-compute the toc every so often
    if (count % 5 == 0) {
        re_compute = true;
        count = 0;
    }

    count++;

    if (re_compute) {
        // Update headings and toc_links, window location changed

        // Get markdown section where all headers are stored
        let markdown_section = document.getElementsByClassName('markdown-section');
        if (!markdown_section.length)
            return;
        markdown_section = markdown_section[0];


        // Get all headers under markdown section
        headings = [];
        for (let header of headers_to_search)
            headings = headings.concat([...markdown_section.getElementsByTagName(header)]);
    

        // Get all TOC links
        toc_links = [...document.getElementsByClassName('toc-link')];
        toc_link_urls = toc_links.map(x => x.innerHTML.match(/href="(.*?)"/g)[0]);

        if (headings.length && toc_links.length)
            re_compute = false;
    }


    // Reset all toc link styles
    for (let link of toc_links)
        link.classList.remove('toc-active');

    // Highlight all toc links that have been scrolled past
    for (let heading of headings) {
        if (heading.offsetTop < document.documentElement.scrollTop + window.innerHeight) {
            let url = heading.innerHTML.match(/href="(.*?)"/g)[0];

            for (let i = 0; i < toc_link_urls.length; i++) {
                if (toc_link_urls[i] === url)
                    toc_links[i].classList.add('toc-active');
            }
        }
    }

}, window.$docsify['page-toc'].sideScrollUpdateInterval)
