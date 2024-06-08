setInterval(() => {
    let color = Math.floor(Math.random() * 360);
    document.body.style.backdropFilter = `hue-rotate(${color}deg)`;
}, 2000);

