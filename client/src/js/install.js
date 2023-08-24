const butInstall = document.getElementById('buttonInstall');// Get the button element by its ID

// Listen for the "beforeinstallprompt" event which is fired when the app can be installed
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events to use it later when installing
    window.deferredPrompt = event;

    // Remove the "hidden" class from the button to make it visible 
    butInstall.classList.toggle('hidden', false);
});

// Add a click event listener to the install button
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return; // If the deferred prompt is not available, exit
    }

    // Show the installation prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable since it can only be used once
    window.deferredPrompt = null;

    // Hide the button after it's clicked
    butInstall.classList.toggle('hidden', true);
});

// Listen for the "appinstalled" event which is fired when the app has been successfully installed
window.addEventListener('appinstalled', (event) => {
    // Clear the deferred prompt after the app is installed
    window.deferredPrompt = null;
}); 