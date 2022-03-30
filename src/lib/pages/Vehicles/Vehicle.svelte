<script lang="ts">
	import { honda1 } from './../../models/mockData';
    import Card, {
      Content,
      Media,
      MediaContent,
      Actions,
      ActionButtons,
    } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import Order from './Order.svelte';
    import CircularProgress from '@smui/circular-progress';
    let loaded=true;

    //FROM MOCK DATA
    export let vehicle=honda1;

    let openRentDialog=false;
</script>

<Card 
data-searchBy={vehicle.name}>
    <Media aspectRatio="16x9">
        <MediaContent >
            {#if loaded}
    
            <img src={vehicle.model.imgSrc} class="effect" alt={"image not available"}>
            <div class="overlay"> 
            </div>
            {:else}
            <div class="center skeleton">
            <div class="mdc-typography--subtitle2">loading image</div>
            <CircularProgress style="height: 20%; width: 20%;" indeterminate />
            </div>
            {/if} 
        </MediaContent>
    </Media>
    <Content class="mdc-typography--body2">    
        <h2
        style="position:relative;" 
        class="
        mdc-typography--headline4
        " >
            {vehicle.name}
        </h2>
        <h3
            class="mdc-typography--subtitle2"
            style="margin: 0 0 10px; color: #888;"
        >
            {vehicle.hasAC?"AC/NONAC":"NON AC ONLY"}
        </h3>
    </Content>
    <Actions>
        <ActionButtons>
        <Button on:click={() => openRentDialog=true}>
            <Label>Rent Now</Label>
        </Button>
        </ActionButtons>
    </Actions>
</Card>
<Order 
{vehicle} 
bind:open={openRentDialog}
/>
<style lang="scss">
    .effect{
        border-radius: 3px;
    }
    .overlay {
        width: 100%;
        height: 130%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(transparent 60%,white 90%, white);
    }
    .center{
        width:100%;
        height:100%;
        position:absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
 
    img{
        width:100%;
    }
    .skeleton{
        background-color: #eee;
    }
</style>
  