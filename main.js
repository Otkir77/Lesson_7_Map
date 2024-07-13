let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

// Elementlarni DOMga chiqarish
data.forEach(num => {
    let div = document.createElement('div');
    div.textContent = num;
    
    // Rangi sozlash
    if (num > 50) {
        div.classList.add('green')
    } else if (num < 50) {
        div.classList.add("red")
    }

    document.body.appendChild(div);


});