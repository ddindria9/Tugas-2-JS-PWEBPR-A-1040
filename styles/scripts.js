document.querySelector('#confirm-btn').addEventListener('click', () => {
    document.querySelector('#text-result').textContent = 'Anda Berbohong!';
    document.querySelector('#bg-box').style.backgroundColor = '#E12E2E';
    document.querySelector('#image-prof').src = './assets/image-3.svg';
    document.querySelector('#question').textContent = 'Anda adalah seorang Teknisi';
    document.querySelector('#btn-group').style.display = 'none';
});

document.querySelector('#cancel-btn').addEventListener('click', () => {
    document.querySelector('#text-result').textContent = 'Anda Benar!';
    document.querySelector('#bg-box').style.backgroundColor = '#6FD240';
    document.querySelector('#image-prof').src = './assets/image-2.svg';
    document.querySelector('#question').textContent = 'Anda adalah seorang Mahasiswa';
    document.querySelector('#btn-group').style.display = 'none';
});
