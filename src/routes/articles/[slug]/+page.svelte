<script>
  let { data } = $props();
</script>

<article>
  <h1>
    {data.meta.title}
  </h1>

  <h2>
    <!-- Display date in user local format -->
    {data.meta.date.toLocaleDateString(undefined, { dateStyle: 'long' })}
  </h2>

  <div> 
    <data.content />
  </div>

</article>