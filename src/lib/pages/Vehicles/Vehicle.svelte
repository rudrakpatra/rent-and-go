<script lang="ts">
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import { Label } from '@smui/common';
    import Paper, { Title, Content } from '@smui/paper';
    import CircularProgress from '@smui/circular-progress';
    export let src="vehicles/cosaySec.webp"
    let name="Hyundai i20"
    let loaded=true;
    let elevation = 1;
    let color = 'default';
    let choices = ['AC', 'NON AC'];
    let selected = 'AC';
</script>
<div class="paper-container">
    <Paper 
    on:mouseover={()=>{elevation=10}}
    on:mouseleave={()=>{elevation=1}}
    transition {elevation} {color}>
        <Title>Vehicle node_modules</Title>
        <Content style="display:flex">
            <Paper 
            style="padding:0px"
            elevation={3}>
                <div class="center" >
                    {#if loaded}
                        <img class="img"{src} alt={name}>
                    {:else}
                        <CircularProgress 
                        style="height: 80px; width: 80px;" 
                        indeterminate />
                    {/if}
                </div>
            </Paper>
            <SegmentedButton segments={choices} let:segment singleSelect bind:selected>
                <Segment {segment}>
                  <Label>{segment}</Label>
                </Segment>
            </SegmentedButton>
        </Content>
    </Paper>
</div>
<style lang="scss">
    .paper-container{
        user-select: none;
        margin:10px;
    }
    .center{
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        height:120px;
    }
  </style>
  