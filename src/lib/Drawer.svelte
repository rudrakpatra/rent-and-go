<script lang="ts">
    import Drawer, {
      Content,
      Header,
      Title,
      Subtitle,
      Scrim,
    } from '@smui/drawer';
    import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
    import { H6 } from '@smui/common/elements';
    import VehicleList from './pages/Vehicles/VehicleList.svelte';
    import Orders from './pages/Orders.svelte';
    import Help from './pages/Help.svelte';
    export let open = false;
    interface Page{
      name:string;
      icon:string;
      component:any;
    }
    let pages:Page[]=[
      {
        name:"orders",
        icon:"list",
        component:Orders,
      },
      {
        name:"vehicles",
        icon:"car_rental",
        component:VehicleList,
      },
      {
        name:"help center",
        icon:"help",
        component:Help,
      }
    ];
    export let active = 0;
    function setActive(i: number) {
      active = i;
      open = false;
    }
  </script>
  
<Drawer variant="modal" bind:open>
    <Header>
    <Title>User:{"<user name>"}</Title>
    <Subtitle>Subtitle.</Subtitle>
    </Header>
    <Content>
      <List>
          {#each pages as page ,i}
            <Item
            href="javascript:void(0)"
            on:click={() => setActive(i)}
            activated={active === i}
            >
              <Graphic class="material-icons" aria-hidden="true">{page.icon}</Graphic>
              <Text>{page.name}</Text>
            </Item>
            <Separator />
          {/each}
      </List>
    </Content>
</Drawer>
<Scrim/>
<!-- actual page details -->
<div class="container gradient">
  <svelte:component this={pages[active].component}/>
</div> 
  
<style lang="scss">
  .container{
    width:100vw;
    height:100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
  .gradient{
  background-image:linear-gradient(#eee,#ddd,);
  }
</style>