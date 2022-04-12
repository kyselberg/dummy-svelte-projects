<script>
    import Board from './index.svelte';

    const url = 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg';

    let friends = [
        {name: 'Bertie Yates', details: '29 years'},
        {name: 'Hester Hogan', details: '29 years'},
        {name: 'Larry Little', details: '29 years'},
        {name: 'Sean Walsh', details: '29 years'},
        {name: 'Lola Gardner', details: '29 years'},
    ].map(item => ({...item, imgUrl: url}));

    const clearFiendsList = () => friends = [];
</script>

<main>
    <Board {friends} {clearFiendsList} />
</main>
