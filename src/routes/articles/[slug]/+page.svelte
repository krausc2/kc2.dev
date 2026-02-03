<script>
  /*
    Passes data from load function to the page as data prop,
    from +page.ts.

    Anywhere data.meta.option or data.content is used, Svelte
    will update the value.
  */
  let { data } = $props();
</script>

<article>
  <h1>
    {data.meta.title}
  </h1>

  <h2>
    {data.meta.date}
  </h2>

  <div> 
    <data.content />
  </div>

</article>