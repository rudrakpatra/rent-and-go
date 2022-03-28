<div class="mdc-typography--headline1">Orders</div>


{#each Array(50) as _unused, i}
<div data-searchBy={`Cell ${i + 1}`} class="demo-cell">Cell {i + 1}</div>
{/each}
<style>
    .demo-cell {
      height: 500px;
      width:60px;
      margin:10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--mdc-theme-secondary, #333);
      color: var(--mdc-theme-on-secondary, #fff);
    }
  </style>