const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()

// View Engine Setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.render("index.ejs");
})

// If you do not want to use diskStorage then uncomment it    
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + new Date() + ".jpg")
    }
})

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }
    // mypic is the name of file attribute
}).single("mypic");



app.post("/uploadProfilePicture", function (req, res, next) {
    upload(req, res, (err) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send("Success, Image uploaded!")
        }
    })
})

app.listen(2000, function (error) {
    if (error) throw error
    console.log("Server created Successfully on PORT 2000")
})