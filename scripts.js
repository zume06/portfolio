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

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const thisYearBirthday = new Date(
        today.getFullYear(),
        birth.getMonth(),
        birth.getDate()
    );

    if (today < thisYearBirthday) {
        age--;
    }

    return age;
}

const birthday = "1998-06-10";

document.getElementById("age").textContent = calculateAge(birthday);