<script lang="ts">
import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
import IconButton from '@smui/icon-button';
import Search from './Search.svelte';
import Drawer from './Drawer.svelte';



let openDrawer=false;
let activePage="vehicles"
$:console.log(activePage);
</script>


<div class="flexV">
  <div>
      <TopAppBar
      variant="static"
      color='primary'
      >
        <Row>
          <Section>
            <IconButton 
            on:click={()=>{openDrawer=true}}
            class="material-icons">menu</IconButton>
            <Title>Rent&Go</Title>
            <span 
            class="material-icons" 
            style= " margin:10px;">
              airport_shuttle
            </span>
          </Section>
      
          <Section align="end" toolbar>
            <Search/>
          </Section>
        </Row>
      </TopAppBar>
    </div>
    <Drawer 
    bind:open={openDrawer}
    />
</div>


<style >
    .flexV{
      user-select: none;
      position:fixed;
      height:100%;
      width:100%;
      display:flex;
      flex-direction: column;
    }
</style>