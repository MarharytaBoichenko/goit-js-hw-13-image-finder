export  default function onImgClick(e) {
    e.preventDefault();
    console.log(e.target.dataset.source);
   
const instance = basicLightbox.create(`
    <div class="modal">
        <img class="modal_img"
      src=${e.target.dataset.source}
      alt=${e.target.alt}
    />
    </div>
`);
    instance.show();
    window.addEventListener('keydown', () => {
        instance.close()
    })
}