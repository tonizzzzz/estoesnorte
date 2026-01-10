function loadInstagramFeed() {
    const feedContainer = document.getElementById('instagram-feed');
    
    const examplePhotos = [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400'
    ];
    
    feedContainer.innerHTML = '';
    
    examplePhotos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'instagram-item';
        item.innerHTML = `<img src="${photo}" alt="Foto ${index + 1}" loading="lazy">`;
        item.onclick = () => window.open('https://instagram.com/estoesnorte', '_blank');
        feedContainer.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', loadInstagramFeed);
