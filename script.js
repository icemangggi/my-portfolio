// Function to switch channels with static noise effect
function switchChannel(channelName, btnElement) {
    const staticNoise = document.getElementById('staticNoise');
    const channels = document.querySelectorAll('.channel');
    const buttons = document.querySelectorAll('.btn-channel');
    const targetChannel = document.getElementById('channel-' + channelName);

    // 1. Play Static Noise
    if (staticNoise) staticNoise.classList.add('active');

    // 2. Play Sound (Optional - simplistic approach)
    // const audio = new Audio('static.mp3'); 
    // audio.play();

    // 3. Update Buttons UI immediately
    buttons.forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    // 4. Switch Content after a brief delay (while noise is on screen)
    setTimeout(() => {
        // Hide all channels
        channels.forEach(ch => ch.classList.remove('active'));

        // Show target channel
        if (targetChannel) {
            targetChannel.classList.add('active');
        }

        // Scroll CRT display to top
        const crtContent = document.querySelector('.crt-content');
        if (crtContent) crtContent.scrollTop = 0;

    }, 200); // Wait 200ms for noise

    // 5. Remove Noise
    setTimeout(() => {
        if (staticNoise) staticNoise.classList.remove('active');
    }, 500); // Noise lasts 500ms total
}

// Initial System Check
console.log('SYSTEM READY');
console.log('RESOLUTION: 480i');
console.log('COLOR: PHOSPHOR GREEN');

// Function to open project details
function openProjectDetail(cardElement) {
    // 1. Get Data
    const title = cardElement.getAttribute('data-title');
    const desc = cardElement.getAttribute('data-desc');
    const imgInfo = cardElement.getAttribute('data-img');
    const tagsString = cardElement.getAttribute('data-tags');

    // 2. Populate Detail View
    document.getElementById('detail-title').innerText = title;
    document.getElementById('detail-desc').innerText = desc;
    document.getElementById('detail-img').src = imgInfo;

    // Tags
    const tagsContainer = document.getElementById('detail-tags');
    tagsContainer.innerHTML = ''; // Clear old tags
    if (tagsString) {
        const tags = tagsString.split(',');
        tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.innerText = tag.trim();
            tagsContainer.appendChild(span);
        });
    }

    // 3. Switch Channel
    switchChannel('detail');
}
