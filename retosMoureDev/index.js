
let container_img = document.getElementById('et_img');
let img = document.getElementById('img');

img.addEventListener('change', (e) =>{
    const file = e.target.files[0];

    if (file) {
        const imageURL = URL.createObjectURL(file);

        container_img.src = imageURL;
        container_img.onload = function() {
          URL.revokeObjectURL(imageURL);
        }
    }
});
function calcu(){
    let width = document.getElementById('width_img');
    let height = document.getElementById('height_img');
    
    // width.value = 5;
    // height.value = 5;
    // width.value = img.width;

}
