<script lang="ts">

    import List from '@smui/list';
    import Card, {
        Content,
        Actions,
    } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import { c1 } from './../models/mockData';
    import { Title } from '@smui/top-app-bar';
    import type { Order } from '../models/Order';
    import OrderComp from '../pages/Vehicles/Order.svelte';
    let clicked = 'nothing yet';
    //MOCK DATA
    let orders=c1.orders as Order[];
    let opened=-1;
</script>
<div>
    <List class="demo-list">
    <Title>Orders</Title>
    {#each orders as order, i (i)}
        <Card
        style="margin:10px"
        data-searchBy={`order ${i}`}
        >
            <Title>
                <p class="mdc-typography--headline4">
                    {`order ${i}`}
                </p>
            </Title>
            <Content>{order.rentStartTime}</Content>
            <Actions fullBleed>
                <Button on:click={() => {
                    opened=i}}>
                    <Label>show details</Label>
                    <i class="material-icons" aria-hidden="true">info</i>
                </Button>
                <OrderComp 
                bind:order={order} 
                open={opened==i}
                readonly={true}
                />
            </Actions>

        </Card>
    {/each}
    </List>
</div>


