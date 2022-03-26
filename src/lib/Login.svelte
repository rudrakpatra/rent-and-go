<!-- <script lang="ts">
	import SignInUp from './SignInUp.svelte';
    import IconButton from '@smui/icon-button';
 let loggedIn=false;
 const toggle=()=>{
     if(!loggedIn){
        openSignInUp=true;
     }
     loggedIn=!loggedIn
     }
</script>
{#if loggedIn}
<IconButton 
on:click={toggle}
class="material-icons" aria-label="log out"
>logout</IconButton>
{:else }
<IconButton 
on:click={toggle}
class="material-icons" aria-label="log in"
>login</IconButton>
{/if} -->