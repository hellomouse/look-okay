const VERSION = 'v0.0.1';

window.$docsify = {
    name: `<h1 class="font-h2 border-l border-secondary border-16 pl-md select-none" style="width: max-content">look-okay<sup class="align-super">${VERSION}</sup></h1>`,
    repo: 'https://github.com/hellomouse/look-okay',

    loadSidebar: true,
    executeScript: true,
    search: 'auto',

    coverpage: '_cover.md',

    notFoundPage: true,

    // docsify-tabs
    tabs: {
        persist: true,
        sync: false,
        theme: 'classic',
        tabComments: true,
        tabHeadings: true
    },

    // page-toc
    'page-toc': {
        tocMaxLevel: 3,
        target: 'h2, h3, h4'
    },


    // custom plugins
    plugins: [
        // Page footer
        hook => {
            let footer = `
<br><hr><br>
<footer class="dark-gray text-right">
<span>hellomouse.look-okay ${VERSION} &nbsp;|&nbsp; 
<span><a href="https://github.com/hellomouse">Hellomouse</a> &copy;2021 - Present.</span><br>
Licensed under the <a href="https://github.com/hellomouse/look-okay/blob/master/LICENSE.md">MIT license</a>
</footer>`;
            hook.afterEach(html => html + footer);
        },

        // Newlines at top of page
        hook => {
            hook.beforeEach(html => '\n\n' + html)
        }
    ],
}


// PWA
if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('sw.js');
}
