// 这里可以添加一些交互功能，如导航栏的响应式菜单等，目前只是一个简单的示例
// 获取导航栏菜单按钮（假设是用于响应式菜单的按钮）
const menuButton = document.querySelector('.menu-button');
// 获取导航链接列表
const navLinks = document.querySelector('.nav-links');

// 如果有菜单按钮的话，可以添加点击事件来显示/隐藏导航链接
if (menuButton) {
    menuButton.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
}