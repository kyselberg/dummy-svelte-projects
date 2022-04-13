<script>
    import TourItem from './tour-item.svelte';
    export let tours = [];
</script>

{#each tours as tour (tour.id)}
    <TourItem {tour} />
{/each}
