(function () {
    function detectSiteBase() {
        if (!window.location.hostname.endsWith('github.io')) {
            return './';
        }
        const segment = window.location.pathname.split('/').filter(Boolean)[0];
        if (segment && !/\.[a-z0-9]+$/i.test(segment)) {
            return '/' + segment + '/';
        }
        return './';
    }

    const baseEl = document.createElement('base');
    baseEl.href = detectSiteBase();
    baseEl.setAttribute('data-site-root', '');
    document.head.prepend(baseEl);

    window.getSiteRoot = function () {
        const href = document.querySelector('base[data-site-root]')?.getAttribute('href') || './';
        if (href === './' || href === '/') {
            return '';
        }
        return href.endsWith('/') ? href : href + '/';
    };

    window.assetPath = function (relativePath) {
        if (!relativePath || /^https?:\/\//i.test(relativePath) || /^mailto:/i.test(relativePath)) {
            return relativePath;
        }
        const clean = relativePath.replace(/^\//, '');
        const root = window.getSiteRoot();
        return root ? root + clean : clean;
    };

    window.pagePath = function (relativePath) {
        return window.assetPath(relativePath);
    };
})();
