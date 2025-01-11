import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  let heroBlock = document.querySelector(".hero.block");

// Select the first direct child of .hero block
  let firstChild = heroBlock.children[0];

// Select the second and third child elements
  let secondChild = heroBlock.children[1];
  let thirdChild = heroBlock.children[2];

// Create a new wrapper div
  let newWrapperDiv = document.createElement("div");

// Add a class to the new wrapper (optional)
  newWrapperDiv.classList.add("new-content-wrapper");

// Insert the new wrapper div right after the first child
  firstChild.insertAdjacentElement("afterend", newWrapperDiv);

// Move the second and third child elements into the new wrapper div
  newWrapperDiv.appendChild(secondChild);
  newWrapperDiv.appendChild(thirdChild);


  let wrapperDiv = document.querySelector(".new-content-wrapper");

  if (wrapperDiv) {
    // Select all direct child <div> elements inside .new-content-wrapper
    let childDivs = wrapperDiv.children;

    // Add classes to each child div
    if (childDivs.length > 0) childDivs[0].classList.add("content-left");
    if (childDivs.length > 1) childDivs[1].classList.add("content-right");

    // Add a class to the wrapper to style it
    wrapperDiv.classList.add("flex-container");
  }
}

