<script lang="ts">
    import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
    import Vehicle from "./Vehicle.svelte";
    let vehicles=[1,2,3,4,5,6,7,8,9,10,];
    import fnames from "./filenames.js"


    //test vehicle images
    function mlString(f) {
    return f.toString().
        replace(/^[^\/]+\/\*!?/, '').
        replace(/\*\/[^\/]+$/, '');
    }
    var g_FOLDER_CONTENTS = mlString(fnames)
    var filenames = g_FOLDER_CONTENTS.match(/\S+/g);
    console.log(filenames)

    const baseaddress="vehicles/"
</script>

<LayoutGrid style="width:100%">
    {#each vehicles as vehicle,i (i) }
        <Cell>
            <div class="card-container">
            <Vehicle src={baseaddress+filenames[i]}/>
            <div/>
        </Cell>
    {/each}
</LayoutGrid>

<style>
    .card-container{
        display:block;
    }
</style>
