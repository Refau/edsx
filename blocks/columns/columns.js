export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      col.classList.add('columns-teaser');
      col.forEach((column) => {
        // Create a new div element to wrap the content
        const wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('wrapped-container'); // Optional: add a class to the wrapper div

        // Insert the wrapperDiv before the column element
        column.parentNode.insertBefore(wrapperDiv, column);

        // Move the column element inside the wrapperDiv
        wrapperDiv.appendChild(column);
      });
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
