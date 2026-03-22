// Hiệu ứng fade-in khi scroll
const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);

// Hiển thị thông báo khi click button
function showAlert() {
    alert("Chào mừng bạn đến với CLB!");
}

// Form liên hệ đơn giản
function submitForm(event) {
    event.preventDefault();
    alert("Gửi thông tin thành công!");
}
