const express =require("express"),
      multer  =require("multer");

const app=express();
app.use(express.static(__dirname + '/public'));
const port=5000;

  var upload = multer({dest: "./uploads"})

  app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
   
});

app.post("/api/upload",upload.single('upload'),(req,res)=>{
res.json({name:req.file.originalname,size:req.file.size})
})


app.listen(port,()=>{
    console.log("Server has started...")
})

