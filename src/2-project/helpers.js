export const DELETE_TOUR_CONTEXT_KEY = 'DELETE_TOUR_CONTEXT_KEY';

export const fetchTours = async ({setIsLoading, setTours}) => {
    try {
        setIsLoading(true);
        const response = await fetch('https://course-api.com/react-tours-project');
        setTours(await response.json())
    } catch (e) {
        setIsLoading(false);
    }
};
