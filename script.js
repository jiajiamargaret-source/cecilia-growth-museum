const lightbox=document.querySelector('.lightbox');
if(lightbox){
  const img=lightbox.querySelector('img');
  const close=lightbox.querySelector('button');
  document.querySelectorAll('.gallery img').forEach(photo=>{
    photo.addEventListener('click',()=>{
      img.src=photo.src;
      lightbox.classList.add('open');
    });
  });
  close.addEventListener('click',()=>lightbox.classList.remove('open'));
  lightbox.addEventListener('click',e=>{
    if(e.target===lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape') lightbox.classList.remove('open');
  });
}
