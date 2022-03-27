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
  </style>
</svelte:head>
<main>
  {#if !user.id}
  <SignInUp bind:user/>
  {:else}
  <Main/>
  {/if}
</main>

