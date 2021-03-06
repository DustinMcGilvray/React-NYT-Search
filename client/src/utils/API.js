import axios from "axios";


export default {
    search: function(query, startYear, endYear) {
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
        const APIKEY =  "ASAALopu1S3IueLj8HvjPntA33ns6H81";   
    
     return axios.get(BASEURL + APIKEY + "&q=" +  query + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
    },
    saveArticle: function(newData) {
        console.log(newData);
        return axios.post("/api/saved", newData);
    },
    getSavedArticles: function() {
        return axios.get("/api/articles");
    },
    deleteSavedArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    }
};