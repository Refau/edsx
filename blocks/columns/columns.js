export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      col.classList.add('columns-teaser');
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
      const titleElement = col.querySelector('h2');
      const textElement = col.children[2];
      console.log(textElement);
      const buttonElement = col.querySelector('.button-container');
      if (titleElement && textElement && buttonElement) {
        col.classList.add('column-teaser-engie')
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('title-text-button-wrapper');
        wrapperDiv.appendChild(titleElement);
        wrapperDiv.appendChild(textElement);
        wrapperDiv.appendChild(buttonElement);
        col.appendChild(wrapperDiv);
      }

    });
  });
}