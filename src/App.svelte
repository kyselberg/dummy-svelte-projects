<script>
	import Board from './1-project/index.svelte';

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

<style>
	body {
		width: 100%;
		height: 100%;
		background: #ff3e00;
	}

	.board {
		width: 360px;
		min-height: 200px;
		background-color: #FFFFFF;
		border-radius: 5px;
		box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, .1);
	}
</style>
