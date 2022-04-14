<script>
    import reviews from './data';

    let index = 0;
    let {name, job, text, image} = reviews[index];

    const updateData = newIndex => {
        const person = reviews[newIndex];
        name = person.name;
        job = person.job;
        text = person.text;
        image = person.image;
    };
    const checkNewIndex = newIndex => {
        if (newIndex < 0) return reviews.length - 1;
        if (newIndex > reviews.length - 1) return 0;
        return newIndex;
    };
    const updateIndex = newIndex => index = index === newIndex
        ? checkNewIndex(index += 1)
        : newIndex;
    const prevPerson = () => updateIndex(checkNewIndex(index - 1));
    const nextPerson = () => updateIndex(checkNewIndex(index + 1));
    const setRandomPerson = () => updateIndex(checkNewIndex(Math.floor(Math.random() * reviews.length)));

    $: updateData(index);

</script>

<article class="review">
    <div class="img-container">
        <img src={image} alt={name} class="person-img" />
    </div>
    <h4 class="author">{name}</h4>
    <p class="job">{job}</p>
    <p class="info">{text}</p>
    <div class="button-container">
        <button class="prev-btn" on:click={prevPerson}>
            <i class="gg-mail-reply"></i>
        </button>
        <button class="next-btn" on:click={nextPerson}>
            <i class="gg-mail-forward"></i>
        </button>
    </div>
    <button class="random-btn" on:click={setRandomPerson}>
        surprise me
    </button>
</article>
