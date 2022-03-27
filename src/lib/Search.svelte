<script lang="ts">
    import { countries } from './countriesData.js';
    import Fab from '@smui/fab';
    import { Icon } from '@smui/common';
    import { Input } from '@smui/textfield';
    import Paper from '@smui/paper';
    import Menu from '@smui/menu';
    import List, { Item, Separator, Text } from '@smui/list';
    import CircularProgress from '@smui/circular-progress';
    /* FILTERING countres DATA BASED ON INPUT */	
    let filteredCountries = [];
    // $: console.log(filteredCountries)	
    const filterCountries = () => {
        let storageArr = []
        if (inputValue) {
            countries.forEach(country => {
                if (country.toLowerCase().startsWith(inputValue.toLowerCase())) {
                    storageArr = [...storageArr, makeMatchBold(country)];
                }
            });
        }
        filteredCountries = storageArr;
    }	
    /* HANDLING THE INPUT */
    let searchInput; // use with bind:this to focus element
    let inputValue = "";
        
    $: if (!inputValue) {
        filteredCountries = [];
    }

    const clearInput = () => {
        inputValue = "";	
        searchInput.focus();
    }
        
    const setInputVal = (countryName) => {
        inputValue = removeBold(countryName);
        filteredCountries = [];
        (document.querySelector('#country-input')as HTMLInputElement).focus();
    }	

    const submitValue = () => {
        if (inputValue) {
            console.log(`${inputValue} is submitted!`);
            setTimeout(clearInput, 1000);
        } else {
            alert("You didn't type anything.")
        }
    }

    const makeMatchBold = (str) => {
        // replace part of (country name === inputValue) with strong tags
        let matched = str.substring(0, inputValue.length);
        let makeBold = `<strong>${matched}</strong>`;
        let boldedMatch = str.replace(matched, makeBold);
        return boldedMatch;
    }

    const removeBold = (str:string) => {
        //replace < and > all characters between
        return str.replace(/<(.)*?>/g, "");
        // return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
    }	
</script>
<div style="display:flex;align-items:center">
    <Paper class="solo-paper" elevation={6}>
        <Input
          placeholder="Search"
          class="solo-input"
          bind:this={searchInput}
          bind:value={inputValue} 
          on:input={filterCountries}
        />
        <Fab
        on:click={()=>{alert(inputValue)}}
        disabled={inputValue === ''}
        color="primary"
        mini
        class="solo-fab"
        >
            <Icon class="material-icons">search</Icon>
        </Fab>
        <!-- FILTERED LIST OF COUNTRIES -->
        {#if filteredCountries.length > 0}
        <Menu style="position:absolute;top:100%;" static>
            <List>
                {#each filteredCountries as country, i (i)}
                <Item 
                on:click={() => setInputVal(country)} 
                >
                    {@html country}
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
    margin: 0px;
  }
</style>
