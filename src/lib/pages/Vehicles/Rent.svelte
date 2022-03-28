<script lang="ts">
    import Button from '@smui/button';
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    import Paper from "@smui/paper"
    import FormField from '@smui/form-field';

    import { Label } from '@smui/common';
    import SegmentedButton, { Segment } from '@smui/segmented-button';

    import type Vehicle from './Vehicle';
    import { Datefield } from 'svelte-mui';
    import TimePicker from "../../TimePicker.svelte"
    export let vehicle:Vehicle;
    let onSubmit=()=>{
        console.log(vehicle);
        // alert("submitting:\n"+JSON.parse(user.name))
    }
    let advancePayment=()=>{
        return 100;
    }
    export let open=false;
    let choices = ['AC', 'Non AC']
    let selected = 'AC';
    let multiplier=1.5;
    $:multiplier=selected=="AC"?1.5:1;

    let pickUpDate=new Date();
    let returnDate=new Date();
    console.log(pickUpDate,returnDate)
    const handlePickUpDate=()=>{

    }
    const handleReturnDate=()=>{

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
                    <SegmentedButton segments={choices} let:segment singleSelect bind:selected={selected}>
                        <!-- Note: the `segment` property is required! -->
                        <Segment {segment}>
                        <Label>{segment}</Label>
                        </Segment>
                    </SegmentedButton>
                        <p>pickup date:</p>
                        <div style="width:fit-content">
                            <Datefield
                            value={pickUpDate}
                            format='D.MM.YYYY'
                            message='DD.MM.YYYY'
                            on:date-change={handlePickUpDate}
                        />
                        </div>
               
                        <TimePicker/>
                        <br/>
    
                        <p >expected return date:</p>
                        <div style="width:fit-content">
                        <Datefield
                            value={returnDate}
                            format='D.MM.YYYY'
                            message='DD.MM.YYYY'
                            on:date-change={handleReturnDate}
                        />
                        </div>
                        <TimePicker/>
                        <br/>

                    <p>model:</p>
                    <p >{vehicle.model}</p>
                    <p>per hour charge:</p>
                    <p>₹ {vehicle.perHourCharge*multiplier}</p>
                    <p>per km charge:</p>
                    <p>₹ {vehicle.perKmCharge*multiplier}</p>
                    <p>minimum charge:</p>
                    <p>₹ {vehicle.perHourCharge*4*multiplier}</p>
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
