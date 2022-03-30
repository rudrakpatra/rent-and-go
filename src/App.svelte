<script lang="ts">
  import Main from './lib/Main.svelte';
  import SignInUp from './lib/SignInUp.svelte';

  import User from "./lib/User";
  let user=new User();
</script>

<svelte:head>
  <!-- Material Icons -->
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <!-- Roboto -->
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />
  <!-- Roboto Mono -->
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
  />
  <!-- smui theme -->
  <link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
  <link rel="stylesheet" href="/src/smui.css" />
  <style>
    *{
      margin:0;
    }
    /* width */
    *::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    *::-webkit-scrollbar-track {
      background:transparent;
    }
    
    /* Handle */
    *::-webkit-scrollbar-thumb {
      border-radius:3px;
      background: #888; 
    }

    /* Handle on hover */
    *::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
    .highlight{
      box-shadow: 0px 0px 6px #ff3e00 ;
    }
  </style>
  <!-- typography -->
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
</svelte:head>
<main>
  {#if !user.id}
  <SignInUp bind:user/>
  {:else}
  <Main/>
  {/if}
</main>

