const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Update UI to notify the user they can add to home screen
    butInstall.classList.toggle("hidden",false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Show the install prompt
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();

    // Clear the deferred prompt variable
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.classList.toggle("hidden",true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    // Clear the deferred prompt variable
    window.deferredPrompt = null;
    
});
