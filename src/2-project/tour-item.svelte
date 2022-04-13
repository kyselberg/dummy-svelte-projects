<script>
    import {getContext} from 'svelte';
    import {DELETE_TOUR_CONTEXT_KEY} from './helpers';
    const deleteTour = getContext(DELETE_TOUR_CONTEXT_KEY);
    export let tour;
    let isWholeTextVisible = false;
    const changeIsWholeTextVisible = () => isWholeTextVisible = !isWholeTextVisible;
</script>

<article class="single-tour">
    <img src="{tour.image}" alt="">
    <footer>
        <div class="tour-info">
            <h4>{tour.name}</h4>
            <h4 class="tour-price">${tour.price}</h4>
        </div>
        <p>
            {isWholeTextVisible ? tour.info : tour.info.slice(0, 200) + '...'}
             <button on:click={changeIsWholeTextVisible}>read {isWholeTextVisible ? 'less' : 'more'}</button>
        </p>
        <button class="delete-btn" on:click={() => deleteTour(tour.id)}>not interested</button>
    </footer>
</article>
