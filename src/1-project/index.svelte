<script>
    export let friends = [];
    export let clearFiendsList = () => {};
</script>

<section class="container">
    <h3>{friends.length} birthdays today</h3>

    {#each friends as friend}
        <article class="person">
            <img src="{friend.imgUrl}" alt="{friend.name}">
            <div>
                <h4>{friend.name}</h4>
                <p>{friend.details}</p>
            </div>
        </article>
    {/each}

    <button on:click={clearFiendsList}>clear all</button>
</section>
