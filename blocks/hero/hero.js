import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {

  const blockConfig = readBlockConfig(block);
  console.log(blockConfig);
  console.log(blockConfig.heading);
  console.log(blockConfig['heading']);

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

  let h4Elements = document.querySelectorAll("h4");

    h4Elements.forEach((h4) => {
      // Create a wrapper div
      let wrapperDiv = document.createElement("div");
      wrapperDiv.classList.add("h4-svg-wrapper"); // Add a class for styling

      // Create the SVG element
      let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute("class", "c-header3Cta__linkIcon");
      svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgElement.setAttribute("width", "24");
      svgElement.setAttribute("height", "24");
      svgElement.setAttribute("viewBox", "0 0 24 24");
      svgElement.setAttribute("aria-hidden", "true");
      svgElement.setAttribute("focusable", "false");

      // Create the path inside the SVG
      let pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathElement.setAttribute("d", "M13.9,12,6.6,4.7,8,3.3,16.7,12,8,20.7,6.6,19.3Z");
      pathElement.setAttribute("fill-rule", "evenodd");

      // Append the path to the SVG
      svgElement.appendChild(pathElement);

      // Insert the wrapper div before the h4 element
      h4.parentNode.insertBefore(wrapperDiv, h4);

      // Move the h4 inside the wrapper div
      wrapperDiv.appendChild(h4);

      // Move the SVG inside the wrapper div
      wrapperDiv.appendChild(svgElement);
    });
}

