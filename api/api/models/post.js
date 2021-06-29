const PATH = "./data.json";
//fs is for reading the json file
const fs = require("fs");

class Post{
    get(){
        // Get Posts
        return this.readData();
    }

    getIndividualBlog(postId){
        // Get One blog post 
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id === postId);        
        return foundPost;
    }

    add(newPost){
        // Add New Post
        const currentPost = this.readData();
        currentPost.unshift(newPost);
        this.storeData(currentPost);
    }


    readData(){
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawData){
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post