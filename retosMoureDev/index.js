
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
    let infoAspect = document.getElementById('infoAspectRatio');
    let resto;
    
    width.value = container_img.naturalWidth;
    height.value = container_img.naturalHeight;
    
    resto = width.value % height.value;
    infoAspect.innerText = width.value / height.value; 
    console.log(resto);
}
