export const getCineplexInTheatres = async () => {
    const url = 'https://www.cineplex.com/api/v1/movies?language=en-us&marketLanguageCodeFilter=true&movieType=0&showTimeType=0&showtimeStatus=0&skip=0&take=5';
    const response = await fetch(url)
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
    try {
        const jsonData = await getCineplexInTheatres();

        if (jsonData) {
            if (jsonData.message.toLowerCase().includes("successful")) {
                res.status(200).json({
                    status: 200,
                    message: jsonData.messageDetails,
                    data: jsonData
                })
            }
            else {
                res.status(404).json({
                    status: 404,
                    error: jsonData.message
                })
                throw new Error(jsonData.message)
            }
        }
        else {
            res.status(404).json({
                status: 404,
                error: jsonData.message
            })
            throw new Error(jsonData.message)
        }
    }
    catch (error) {
        console.log(error)
    }
}

export default handler