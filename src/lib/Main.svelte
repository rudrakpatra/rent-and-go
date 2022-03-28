<script lang="ts">
import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
import IconButton from '@smui/icon-button';
import Search from './search/Search.svelte';
import Drawer from './Drawer.svelte';


let openDrawer=false;
let activePage=1
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
            <img 
            class="logo"
            src='./logo.svg'
            alt="R&G"/>
          </Section>
      
          <Section align="end" toolbar>
            <Search/>
          </Section>
        </Row>
      </TopAppBar>
    </div>
    <Drawer 
    bind:open={openDrawer}
    active={activePage}
    />
</div>


<style >
  .logo{
    margin-left:5px;
    margin-right:50px;
    height:40px;
  }
    .flexV{
      user-select: none;
      position:fixed;
      height:100%;
      width:100%;
      display:flex;
      flex-direction: column;
    }
</style>