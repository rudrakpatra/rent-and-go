<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import { vehiclesList } from '../../models/mockData';
    import Vehicle from "./Vehicle.svelte";
    let vehicles=vehiclesList;
</script>

<LayoutGrid style="width:100%">
    {#each vehicles as vehicle,i (i) }
        <Cell>
            <div class="card-container">
            <Vehicle bind:vehicle/>
            <div/>
        </Cell>
    {/each}
</LayoutGrid>

<style>
    .card-container{
        display:block;
    }
</style>
