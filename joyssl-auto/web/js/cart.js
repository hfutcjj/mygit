// =====================================================
// 购物车 Cookie 操作
// =====================================================
const CART_COOKIE_NAME = 'joyssl_cart';
const CART_COOKIE_EXPIRY = 7; // 7天

// Cookie 操作函数
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}

// =====================================================
// 购物车核心操作
// =====================================================

// 获取购物车列表
function getCart() {
    const cookie = getCookie(CART_COOKIE_NAME);
    if (cookie) {
        try {
            return JSON.parse(cookie);
        } catch (e) {
            return [];
        }
    }
    return [];
}

// 保存购物车
function saveCart(cart) {
    setCookie(CART_COOKIE_NAME, JSON.stringify(cart), CART_COOKIE_EXPIRY);
    // 更新购物车角标
    updateCartBadge();
}

// 添加到购物车
function addToCart(item) {
    const cart = getCart();
    
    // 检查是否已存在相同商品（相同产品类型+版本+域名）
    const existingIndex = cart.findIndex(i => 
        i.product_type === item.product_type && 
        i.edition === item.edition && 
        i.domain === item.domain
    );
    
    if (existingIndex >= 0) {
        // 已存在，更新年限
        cart[existingIndex].years = item.years;
        cart[existingIndex].price = item.price;
    } else {
        // 新增
        cart.push({
            id: Date.now(),
            product_type: item.product_type,
            product_type_name: item.product_type_name,
            edition: item.edition,
            edition_name: item.edition_name,
            domain: item.domain,
            years: item.years,
            price: item.price,
            price_display: item.price_display,
            add_time: new Date().toISOString()
        });
    }
    
    saveCart(cart);
    return cart;
}

// 从购物车移除
function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    return cart;
}

// 更新购物车数量
function updateCartItem(id, years, price) {
    let cart = getCart();
    const index = cart.findIndex(item => item.id === id);
    if (index >= 0) {
        cart[index].years = years;
        cart[index].price = price;
        saveCart(cart);
    }
    return cart;
}

// 清空购物车
function clearCart() {
    deleteCookie(CART_COOKIE_NAME);
    updateCartBadge();
}

// 获取购物车商品数量
function getCartCount() {
    const cart = getCart();
    return cart.length;
}

// 获取购物车总金额
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.price, 0);
}

// 更新购物车角标（页面顶部购物车图标旁的数字）
function updateCartBadge() {
    const count = getCartCount();
    $('.cart-num, .cart-count, .shopping-cart-num').text(count > 0 ? count : '');
}