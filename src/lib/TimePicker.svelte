<script lang="ts">
    import Slider from '@smui/slider';
  
    let value = 0;
    const HHMMFormat=(value)=>{
        return `${Math.floor(value/60).toString().padStart(2, '0')}:
        ${(value-60*Math.floor(value/60)).toString().padStart(2, '0')} 
        ${value>=12*60?"PM":"AM"}`
    }
</script>
<Slider
  bind:value
  min={0}
  max={24*60}
  step={1}
  input$aria-label="Continuous slider"
/>
<p>
    Time:
    {HHMMFormat(value)}
</p>



