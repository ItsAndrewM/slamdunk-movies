const getInTheatres = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?sort_by=primary_release_date.desc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        }
    };

    const response = await fetch(url, options)
        .then((res => {
            return res.json()
        }))
        .then((res) => {
            return res
        })
        .catch((err) => {
            return `error: ${err}`
        })
    return response
}

const handler = async (req, res) => {
    const jsonData = await getInTheatres();
    try {

    }
    catch {

    }
    res.status(200).json(jsonData)
}

export default handler;