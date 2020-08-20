// Custom search filter taking the users search input and comparing it to the images in the gallery.

let image = document.getElementsByTagName('a');
let result = image.length;
const input = document.getElementById('search');

function search() {
    let filter = input.value.toLowerCase();

    for(let i = 0; i < result; i++) {
        let caption = image[i].getAttribute('data-caption').toLowerCase();

        if (caption.indexOf(filter) > -1) {
            image[i].style.display = '';
        } else {
            image[i].style.display = 'none';
        }
    }
}