const domain = 'bambiroot.github.io' // changable
    , iframe = document.createElement('iframe')
    , screen = domain.match(/github\.io/) ? window.location.pathname : window.location.pathname.replace(/\/content|\.(html|md)/g, '');
iframe.src = '//' + domain + screen;
iframe.setAttribute('style', 'width: 100%; height: 100%; top: 0; bottom: 0; left: 0; right: 0; position: absolute; border: none;');
document.body.innerHTML = '';
document.body.appendChild(iframe);
