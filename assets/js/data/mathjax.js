---
---
// Keep Chirpy's math delimiters and add the LaTeX bm shorthand.
MathJax = {
  loader: { load: ['[tex]/boldsymbol'] },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    tags: 'ams',
    packages: { '[+]': ['boldsymbol'] },
    macros: { bm: ['\\boldsymbol{#1}', 1] }
  }
};
