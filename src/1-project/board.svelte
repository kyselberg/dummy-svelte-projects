<script>
    import PersonItem from './person-item.svelte';

    export let friends = [];
    export let clearFiendsList = () => {};
    export let removeFriend = () => {};
    export let addFriend = () => {};
</script>

<section class="container">
    <h3>{friends.length} birthdays today</h3>

    {#each friends as friend}
        <PersonItem {friend} />
    {/each}

    <div class="btns">
        <button on:click={addFriend}>+</button>
        <button on:click={removeFriend}>-</button>
    </div>
    <button on:click={clearFiendsList}>clear all</button>
</section>
