
/***********************************************************************************************************************************************/
//Задание
let paste = document.getElementById('ULS');

async function GetPhotos() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let objects = await response.json();
    let SliceObjects = objects.slice(0,20);
    SliceObjects.forEach(SliceObject=>{
        let Li = document.createElement('LI');
        Li.className='LIS';
        Li.innerHTML=`<img src="${SliceObject.url}" class="IMGS">`;
        paste.prepend(Li);
    });
    
}

GetPhotos();
