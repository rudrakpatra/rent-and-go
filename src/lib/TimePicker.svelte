<script lang="ts">
    import Slider from '@smui/slider';
    export var readonly:boolean=false;
    let value = 0;
    const HHMMFormat=(value)=>{
        return `${Math.floor(value/60).toString().padStart(2, '0')}:
        ${(value-60*Math.floor(value/60)).toString().padStart(2, '0')}
        ${value>=12*60?"PM":"AM"}`
    }

    export let onchange=(hh,mm)=>{

    }
    $:hh=()=>Math.floor(value/60)
    $:mm=()=>value-60*Math.floor(value/60)
    $:onchange(hh(),mm());
</script>
    <Slider
        disabled={readonly}
        bind:value
        min={0}
        max={24*60-1}
        step={1}
        input$aria-label="Continuous slider"
    />
<p>
    Time:
    {HHMMFormat(value)}
</p>



