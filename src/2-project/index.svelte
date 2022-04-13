<script>
    export let places = [];
</script>

<section>
    <div class="title">
        <h2>our tours</h2>
        <div class="underline"></div>
    </div>
    <div>
        {#each places as place}
            <article class="single-tour">
                <img src="" alt="">
                <footer>

                </footer>
            </article>
        {/each}
    </div>
</section>
