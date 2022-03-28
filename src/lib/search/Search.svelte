<script lang="ts">

    import Fab from '@smui/fab';
    import { Icon } from '@smui/common';
    import { Input } from '@smui/textfield';
    import Paper from '@smui/paper';
    import Menu from '@smui/menu';
    import List, { Item} from '@smui/list';
    import {getNames, makeMatchBold, search, showSearch,} from './search';
    let query="",matches:HTMLElement[],results:string[];
    let openSuggestions=true;
    $:matches=search(query);
    $:results=getNames(matches);
</script>
<div style="display:flex;align-items:center">
    <Paper class="solo-paper" elevation={6}>
        <Input
          placeholder="Search"
          class="solo-input"
          bind:value={query} 
          on:input={()=>{openSuggestions=true}}
        />
        <Fab
        on:click={()=>{showSearch(matches,query)}}
        disabled={query === ''}
        color="primary"
        mini
        class="solo-fab"
        >
            <Icon class="material-icons">search</Icon>
        </Fab>
        {#if (results.length> 0) && openSuggestions}
        <Menu style="position:absolute;top:100%;" static>
          <List>
              {#each results as result, i (i)}
              <Item 
              on:click={()=>{
                query=result
                results=[]
                openSuggestions=false
              }} 
              >
                  {@html makeMatchBold(result,query)}
              </Item>
              {/each}	
          </List>
        </Menu>
        {/if}
      </Paper>
</div>
<style>
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 600px;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
    color: var(--mdc-theme-on-surface, #000);
  }
  * :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface, #000);
    opacity: 0.6;
  }
  * :global(.solo-fab) {
    flex-shrink: 0;
  }
</style>
