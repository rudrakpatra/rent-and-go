<script lang="ts">
 import List, { Item, Separator, Text } from '@smui/list';
 
 let clicked = 'nothing yet';
 $:alert(clicked);
</script>
<div>
    <List class="demo-list">
    {#each Array(50) as _unused, i}
        <Item 
        data-searchBy={`order ${i}`}
        on:SMUI:action={() => (clicked = `order ${i}`)}>
            <Text>order {i}</Text>
        </Item>
    {/each}
    </List>
</div>
