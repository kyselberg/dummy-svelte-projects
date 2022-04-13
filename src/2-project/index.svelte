<script>
    import {onMount, setContext} from 'svelte';
    import Tours from './tour-list.svelte';
    import {DELETE_TOUR_CONTEXT_KEY, fetchTours} from './helpers';

    let isLoading = false;
    const setIsLoading = value => isLoading = value;

    let tours = [];
    const setTours = toursList => tours = toursList;

    const deleteTourItem = id => tours = tours.filter(tour => tour.id !== id);

    setContext(DELETE_TOUR_CONTEXT_KEY, deleteTourItem);

    onMount(() => {
        fetchTours({setIsLoading, setTours});
    });

</script>


<main>
    <section>
        <div class="title">
            <h2>our tours</h2>
            <div class="underline"></div>
        </div>
        <Tours {tours} />
    </section>
</main>
