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

// 点击按钮显示个人主页
document.querySelector('.home-button').addEventListener('click', function() {
    // 隐藏主页面内容
    document.querySelector('.main-content').classList.add('hidden');
    
    // 显示个人主页内容
    const homePage = document.getElementById('homePage');
    homePage.classList.add('show');
});
