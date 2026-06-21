const encodedChannelData = { /* Paste your data object here */ };

// Add your specific decryption/decoding function here
function decodeStream(encodedString) {
    // Example: This is where you put the logic that reverses 
    // the obfuscation used in the original strings.
    return atob(encodedString); // This is a placeholder for your actual decryption
}

async function loadChannel() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const video = document.getElementById('video');
    const player = new shaka.Player(video);

    if (encodedChannelData[id]) {
        const url = decodeStream(encodedChannelData[id]);
        try {
            await player.load(url);
        } catch (e) {
            console.error("Player Load Error:", e);
        }
    }
}

document.addEventListener('DOMContentLoaded', loadChannel);
