export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      col.classList.add('columns-teaser');
      //wrapChildrenWithDiv(col);
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }

      // Select the title, text, and button elements
      const titleElement = col.querySelector('h2');
      const textElement = col.children[2];
      console.log(textElement);
      const buttonElement = col.querySelector('.button-container');

      if (titleElement && textElement && buttonElement) {
        col.classList.add('column-teaser-engie')
        // Create a new div element to surround the title, text, and button
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('title-text-button-wrapper');  // Add a class for styling if needed

        // Append title, text, and button to the wrapper div
        wrapperDiv.appendChild(titleElement);
        wrapperDiv.appendChild(textElement);
        wrapperDiv.appendChild(buttonElement);

        // Find the parent container (the column) and append the new wrapper div
        col.appendChild(wrapperDiv);
      }

    });
  });
}