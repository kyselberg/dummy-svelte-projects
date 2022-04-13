<script>
    import Board from './index.svelte';
    import {getRandomPerson, getRandomPersonList} from "../helpers/helpers";

    let friends = getRandomPersonList(10);

    const clearFiendsList = () => friends = [];
    const addFriend = () => friends = friends.concat(getRandomPerson());
    const removeFriend = () => friends = friends.slice(0, -1);

</script>

<main>
    <Board
            {friends}
            {clearFiendsList}
            {addFriend}
            {removeFriend}
    />
</main>
