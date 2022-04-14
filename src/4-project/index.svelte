<script>
    import QuestionItem from './question-item.svelte';
    import questions from './questions';
</script>

<main>
    <div class='container'>
        <h3>questions and answers about login</h3>
        <section class='info'>
            {#each questions as question}
                <QuestionItem data="{question}" />
            {/each}
        </section>
    </div>
</main>
