// CMS Token - Any string element can use the token '[%br%]' to wrap all previous text within a span.
const wordWrapToken = (() => {
  const wrapWordsInSpan = (inputString) => {
    // Using the token [%br%] on the CMS side
    const segments = inputString.split("[%br%]");

    let processedSegments = [];

    segments.forEach((segment) => {
      if (segment.trim() !== "") {
        processedSegments.push(`<span>${segment.trim()}</span>`);
      }
    });

    return processedSegments.join("");
  };

  const elements = document.querySelectorAll(`
    p,
    span,
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6
  `);

  elements.forEach((element) => {
    const content = element.innerHTML;

    if (content.includes("[%br%]")) {
      const wrappedContent = wrapWordsInSpan(content);
      element.innerHTML = wrappedContent;
    }
  });
})();