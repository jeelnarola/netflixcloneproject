import { fetchFromTMDB } from "../services/tmdb.services.js";

export async function getTrendingmovie(req,res){
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
        console.log("data")
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)]
        res.json({success:true,content : randomMovie})
    } catch (error) {
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function getMovieTrailers(req,res) {
    const {id} = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`)
        res.json({success:true,content : data.results})

    } catch (error) {
        if(error.message.includes("404")){
            return res.status(400).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function getMovieDetalis(req,res) {
    const {id} = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
        res.json({success:true,content : data.results})

    } catch (error) {
        if(error.message.includes("404")){
            return res.status(400).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function getSimilarMovie(req,res) {
       const {id} = req.params

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`)
        res.json({success:true,Similar:data.results})

    } catch (error) {
        if(error.message.includes("404")){
            return res.status(400).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function getMovieByCategory(req,res) {
    const {category} = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`)
        res.json({success:true,category:data.results})

    } catch (error) {
        if(error.message.includes("404")){
            return res.status(400).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}