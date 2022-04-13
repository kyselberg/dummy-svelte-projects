<script>
    export let friend = {};
</script>

<article class="person">
    <img src="{friend.imgUrl}" alt="{friend.name}">
    <div>
        <h4>{friend.name}</h4>
        <p>{friend.details.age}</p>
    </div>
</article>
