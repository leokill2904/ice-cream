const radioList = document.querySelector('.gallery__radio-list');

radioList.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    return;
  }

  e.preventDefault();

  const galleryItem = document.querySelector('.gallery__item.is-active');

  if (galleryItem) {
    galleryItem.classList.remove('is-active');
  }

  const galleryItemId = e.target.getAttribute('href').slice(1);
  const nextGalleryItem = document.querySelector(`#${galleryItemId}`);
  nextGalleryItem.classList.add('is-active');
});
