document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.page1').style.display = 'none';
    document.querySelector('.page2').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('noButton').style.animation = 'shake 0.5s ease-in-out infinite';
});

document.getElementById('yesButton2').addEventListener('click', function() {
    document.querySelector('.page2').style.display = 'none';
    document.querySelector('.page3').style.display = 'block';
});

document.getElementById('noButton2').addEventListener('click', function() {
    document.getElementById('noButton2').style.animation = 'shake 0.5s ease-in-out infinite';
});
