// 预加载背景图片
function preloadImages(urls) {
    var img;
    for (var i = 0; i < urls.length; i++) {
        img = new Image();
        img.src = urls[i];
    }
}

// 在页面加载时预加载背景图
window.onload = function() {
    preloadImages([
        'AutumnField.jpg',
        'WinterForrest.jpg',
        'DessertLake.jpg',
        'WinterHub.jpg',
        'Sunset.jpg'
    ]);
};
