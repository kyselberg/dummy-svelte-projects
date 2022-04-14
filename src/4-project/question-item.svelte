<script>
    import {slide} from 'svelte/transition';
    import {backInOut} from 'svelte/easing';
    export let data = {};
    let isVisible = false;
    const updateVisible = () => isVisible = !isVisible;
</script>

<article class="question">
    <header>
        <h4>{data.title}</h4>
        <button class="btn" on:click={updateVisible}>
            {#if isVisible}
                -
            {:else}
                +
            {/if}
        </button>
    </header>
    {#if isVisible}
        <p transition:slide={{duration: 400, easing: backInOut}}>{data.info}</p>
    {/if}
</article>
