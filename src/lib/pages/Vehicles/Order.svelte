<script lang="ts">
	
    import Button from '@smui/button';
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    import Paper from "@smui/paper"
    import FormField from '@smui/form-field';

    import { Label } from '@smui/common';
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import { Datefield } from 'svelte-mui';
    import TimePicker from "../../TimePicker.svelte";


    import type Vehicle from '../../models/Vehicle';
    import { nightStayCharge } from '../../models/Vehicle';
    import { Order } from '../../models/Order';

    import { c1,sumo1 } from './../../models/mockData';
    import type { Customer } from 'src/lib/models/Actors';

    export let customer=c1;
    export let vehicle=sumo1;
    let onSubmit=()=>{
        console.log(order.vehicle);
    }
    let advancePayment=()=>{
        return order.vehicle.model.advancedPayment;
    }
    export let open=false;
    //MOCK DATA


    export let order=new Order(customer,vehicle);

    export let readonly:boolean=false;

    
    let choices = order.vehicle.hasAC?['AC', 'Non AC']:['Non AC'];
    let selected = order.vehicle.hasAC?'AC':'Non AC';
    if (readonly){
        choices=[selected]
    }
    let multiplier=1.5;
    $:multiplier=selected=="AC"?1.5:1;

    let pickUpDate=order.estimatedRentEndTime;
    let returnDate=order.estimatedRentEndTime;

    const handlePickUpDate=(DE:Date)=>{
        //@ts-ignore
        order.rentStartTime=DE.detail
        console.log(order.rentStartTime)
    }
    const handlePickUpTime=(hh)=>{
        order.rentStartTime.setHours(hh);
        console.log(order.rentStartTime)
    }
    const handleReturnDate=(DE:Date)=>{
        //@ts-ignore
        order.estimatedRentEndTime=DE.detail
    }
    const handleReturnTime=(_unused,mm)=>{
        order.rentStartTime.setMinutes(mm)
    }
  </script>
  <Dialog
  fullscreen
  bind:open={open}
  >
    <Paper>
            <FormField style="
            display:block;
            ">
            <Title>
                Payment Details
            </Title>
                <Content>
                    <div class="mdc-typography--overline">
                        Type:
                        <br/>
                        <SegmentedButton 
                        segments={choices} let:segment singleSelect bind:selected={selected}>
                            <!-- Note: the `segment` property is required! -->
                            <Segment {segment}>
                            <Label>{segment}</Label>
                            </Segment>
                        </SegmentedButton>
                            <p>pickup date:</p>
                            <div style="width:fit-content">
                                <Datefield
                                value={pickUpDate}
                                {readonly}
                                locale={false}
                                format='D.MM.YYYY'
                                message='DD.MM.YYYY'
                                on:date-change={handlePickUpDate}
                            />
                            </div>
                
                            <TimePicker 
                            {readonly}
                            onchange={handlePickUpTime}/>
                            <br/>
        
                            <p >expected return date:</p>
                            <div style="width:fit-content">
                            <Datefield
                                value={returnDate}
                                {readonly}
                                locale={false}
                                format='D.MM.YYYY'
                                message='DD.MM.YYYY'
                                on:date-change={handleReturnDate}
                            />
                            </div>
                            <TimePicker 
                            {readonly}
                            onchange={handleReturnTime}/>
                            <br/>

                        <p>model:</p>
                        <p>{order.vehicle.model.name}</p>
                        <p>per hour charge:</p>
                        <p>₹ {order.vehicle.model.perHourCharge*multiplier}</p>
                        <p>per km charge:</p>
                        <p>₹ {order.vehicle.model.perKmCharge*multiplier}</p>
                        <p>minimum charge:</p>
                        <p>₹ {order.vehicle.model.perHourCharge*4*multiplier}</p>
                        <p>night stay charge:</p>
                        <p>₹ {nightStayCharge}</p>
                    </div>
                </Content>
                <Actions>
                    <Button on:click={onSubmit}>pay advance ₹{advancePayment()}</Button>
                </Actions>
            </FormField>  
        </Paper>
    </Dialog>

<style lang="scss">
    *{
        user-select: none;
        --primary:#ff3e00
    }
</style>
