<script lang="ts">
    import Card, {
      Content,
      Media,
      MediaContent,
      Actions,
      ActionButtons,
    } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import Rent from './Rent.svelte';
    import CircularProgress from '@smui/circular-progress';
    import VehicleBP from "./Vehicle";
    export let src="vehicles/cosaySec.webp"
    let loaded=true;

    let vehicle=new VehicleBP();

    let renting=false;
</script>

<Card 
data-searchBy={src}>
    <Media aspectRatio="16x9">
        <MediaContent >
            {#if loaded}
            <img {src} class="effect" alt={"image not available"}>
            {:else}
            <div class="center skeleton">
            <div class="mdc-typography--subtitle2">loading image</div>
            <CircularProgress style="height: 20%; width: 20%;" indeterminate />
            </div>
            {/if} 
        </MediaContent>
    </Media>
    <Content class="mdc-typography--body2">
        
    <h2 class="
    mdc-typography--headline6
    " 
    style="margin: 0;">
        {src}
    </h2>
    <h3
        class="mdc-typography--subtitle2"
        style="margin: 0 0 10px; color: #888;"
    >
        {vehicle.id}
    </h3>
    </Content>
    <Actions>
        <ActionButtons>
        <Button on:click={() => renting=true}>
            <Label>Rent Now</Label>
        </Button>
        </ActionButtons>
    </Actions>
</Card>
<Rent 
{vehicle} 
bind:open={renting}
/>
<style lang="scss">
    .effect{
        filter: hue-rotate(0deg);
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
  