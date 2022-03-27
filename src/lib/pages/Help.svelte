<div class="mdc-typography--headline1">Headline 1</div>
 
<div class="mdc-typography--headline2">Headline 2</div>
 
<div class="mdc-typography--headline3">Headline 3</div>
 
<div class="mdc-typography--headline4">Headline 4</div>
 
<div class="mdc-typography--headline5">Headline 5</div>
 
<div class="mdc-typography--headline6">Headline 6</div>
 
<div class="mdc-typography--subtitle1">Subtitle 1</div>
 
<div class="mdc-typography--subtitle2">Subtitle 2</div>
 
<div class="mdc-typography--body1">Body 1</div>
 
<div class="mdc-typography--body2">Body 2</div>
 
<div class="mdc-typography--caption">Caption</div>
 
<div class="mdc-typography--button">Button</div>
 
<div class="mdc-typography--overline">Overline</div>
 
<div class="mdc-typography--body1">
  <small>small</small>
  <big>big</big>
  <sup>sup</sup>
  <sub>sub</sub>
  <strong>strong</strong>
  <em>em</em>
</div>

<style lang="scss">
// Import all the styles for the classes.
@use '@material/typography/mdc-typography';
// The following classes become available:
//   mdc-typography--headline1
//   mdc-typography--headline2
//   mdc-typography--headline3
//   mdc-typography--headline4
//   mdc-typography--headline5
//   mdc-typography--headline6
//   mdc-typography--subtitle1
//   mdc-typography--subtitle2
//   mdc-typography--body1
//   mdc-typography--body2
//   mdc-typography--caption
//   mdc-typography--button
//   mdc-typography--overline
//   mdc-typography--body1
 
// Import the mixins.
@use '@material/typography/index' as typography;
 
//
// Some defaults that may be helpful to you.
// If you just want to use these, and not the classes, you can instead just
// @use '@material/typography/index' as typography, and your CSS file will be smaller.
//
html {
  @include typography.typography('body1');
}
 
h1 {
  @include typography.typography('headline1');
}
 
h2 {
  @include typography.typography('headline2');
}
 
h3 {
  @include typography.typography('headline3');
}
 
h4 {
  @include typography.typography('headline4');
}
 
h5 {
  @include typography.typography('headline5');
}
 
h6 {
  @include typography.typography('headline6');
}
 
caption {
  @include typography.typography('caption');
}
 
code,
pre {
  font-family: 'Roboto Mono', monospace;
}
 
small {
  font-size: 0.9em;
}
 
big {
  font-size: 1.1em;
}
 
b,
strong {
  font-weight: bold;
}
</style>