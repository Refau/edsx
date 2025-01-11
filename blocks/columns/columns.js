export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      col.classList.add('columns-teaser');
      wrapChildrenWithDiv(col);
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

function wrapChildrenWithDiv(parentElement) {
  // Get all child elements of the parent element
  const children = Array.from(parentElement.children);

  // Loop through each child element
  children.forEach((child, index) => {
    // Create a new div element
    const wrapperDiv = document.createElement('div');

    // Add a unique class to the wrapper div (e.g., using the index)
    wrapperDiv.classList.add(`wrapped-child`);

    // Insert the child element inside the new div
    wrapperDiv.appendChild(child);

    // Append the new div back into the parent element
    parentElement.appendChild(wrapperDiv);
  });
}


