function openImage(imageSrc) {
    var modal = document.getElementById('image-modal');
    var modalImage = document.getElementById('modal-image');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeImageModal() {
    var modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}
