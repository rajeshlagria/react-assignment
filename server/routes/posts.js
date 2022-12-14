const postRoutes = (app, fs) => {
    const dataPath = "./data/data.json";

    //common function for read data (reuseable)
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.readFile(filePath, encoding, (err, data)=>{
            if(err){
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    //common function for write data (reuseable)
    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
    ) => {
        fs.writeFile(filePath, fileData, encoding, (err)=>{
            if(err){
                throw err;
            }

            callback();
        });
    };

    
    //get api (fetch all data)
    app.get('/posts', (req, res)=>{
        readFile((data) => {
           res.send(data);
        }, true);
    });

    //get api (searching via id)
    app.get('/posts/:id', (req, res)=>{
        readFile((data) => {
            const postId = req.params['id'];
            const posts = data.posts.filter(record => record.userId == postId);
            res.send({posts});
        }, true);
    });


    //get api (searching via title)
    app.get('/searchpost', (req, res)=>{
        readFile((data) => {
            const filter = req.query.title;
            
            const posts = data.posts.filter(record => record.title.includes(filter));
            res.send({posts});
        }, true);
    });


    //update api (update data)
    app.put('/updatepost/:id', (req, res)=>{
        readFile((data) => {
            const postId = req.params['id'];
            let newData = data.posts.map((val)=>{
                if(val.id == postId){
                    val = req.body;
                }
                return val;
            })
            
            data["posts"] = newData;
            const status = {
                status: 200,
                message: `Post id:${postId} updated`
            }
            writeFile(JSON.stringify(data, null, 2), () => {
                res.send(status);
              });
        }, true);
    });
};

module.exports = postRoutes;
