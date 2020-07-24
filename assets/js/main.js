// Make sure sw are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register("Service_Worker.js")
            .then(reg => console.log('Service Worker: Registered (Pages)'))
            .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
}
// alt + shift + A comment back

/* if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register("Service_Worker_Site.js")
            .then(reg => console.log('Service Worker: Registered (Pages)'))
            .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
} */