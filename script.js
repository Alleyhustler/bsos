document.addEventListener("keydown", function() {
    const bsod = document.querySelector('.bsod');
    const popup = document.querySelector('.popup');
    const body = document.body;

    // Hide the BSOD text
    bsod.style.display = 'none'; // Hide the BSOD text

    // Change the body background to an image
    body.classList.add('bg-image');

    // Trigger popup visibility if it was hidden
    if (popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');
        popup.classList.add('visible');
    }
});
