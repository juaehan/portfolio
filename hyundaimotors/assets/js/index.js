document.querySelector('#company').addEventListener('mouseover', (e) =>{
    const comSub = document.querySelector('#comSub');
    comSub.style.display='block';
});
document.querySelector('#close').addEventListener('click', (e) => {
    e.preventDefault();
    comSub.style.display='none';
});

document.querySelector('#language').addEventListener('click', e =>{
    const lanSub = document.querySelector('.right_sub');
    console.log(lanSub);
    if(lanSub.style.display == 'block'){
        lanSub.style.display = 'none';
    }else{
         lanSub.style.display = 'block';
    }
});


document.querySelectorAll('#img_text').forEach((v, i) => {
    v.addEventListener('mouseover', e => {
         const text = document.querySelector('.img_text');
         text.style.display = 'block';
    });
});


/** axios */
// (async () => {
//     let json = null;

//     try{
//         json = await axios.get('./social.json');
//     } catch(e) {
//         console.error(e);
//         return;
//     }

//     if(json != null){
//         const {data} = json;

//         data.documents.map((v, i) => {
//             const div1 = document.createElement('div');
//         });
//     }
// })();