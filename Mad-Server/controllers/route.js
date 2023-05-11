const router = require('express').Router(); 
const database = require('../assets/db.json'); 
const fs = require('fs');
const fsPath = './assets/db.json'; 

router.get('/first-word', (req, res) => {
    try {

        let result = database.filter(i => i.id == 1); 

        if(result.length > 0) {
            res.status(200).json({
                message: `The first word is: `, 
                result : result[0].name // just get the name returned, not the whole item 
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}); 

router.post('/second-word', (req, res) => {
    try {
        const id = database.length + 1; 
        const { word } = req.body; 

        const result = { 
            "id": id,
            "word": word
        }

        fs.readFile(fsPath, (err, data) => {
            if(err) throw err;
            const database = JSON.parse(data);
            database.push(result);

            fs.writeFile(fsPath, JSON.stringify(database), err => console.log(err)); 

            res.status(200).json({
                message: `Word ${word} added.`, 
            }); 
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        }); 
    }
});

router.post('/third-word', (req, res) => {
    try {
        const id = database.length + 1; 
        const { word } = req.body; 

        const result = { 
            "id": id,
            "word": word
        }

        fs.readFile(fsPath, (err, data) => {
            if(err) throw err;
            const database = JSON.parse(data);
            database.push(result);

            fs.writeFile(fsPath, JSON.stringify(database), err => console.log(err)); 

            res.status(200).json({
                message: `Word ${word} added.`, 
            }); 
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        }); 
    }
});

router.post('/fourth-word', (req, res) => {
    try {
        const id = database.length + 1; 
        const { word } = req.body; 

        const result = { 
            "id": id,
            "word": word
        }

        fs.readFile(fsPath, (err, data) => {
            if(err) throw err;
            const database = JSON.parse(data);
            database.push(result);

            fs.writeFile(fsPath, JSON.stringify(database), err => console.log(err)); 

            res.status(200).json({
                message: `Word ${word} added.`, 
            }); 
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        }); 
    }
});

router.post('/fifth-word', (req, res) => {
    try {
        const id = database.length + 1; 
        const { word } = req.body; 

        const result = { 
            "id": id,
            "word": word
        }

        fs.readFile(fsPath, (err, data) => {
            if(err) throw err;
            const database = JSON.parse(data);
            database.push(result);

            fs.writeFile(fsPath, JSON.stringify(database), err => console.log(err)); 

            res.status(200).json({
                message: `Word ${word} added.`, 
            }); 
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        }); 
    }
});

router.get('/story', (req, res) => {
   //  const dataItem = { id, word };

    const firstWord = database[0].name; 
    const secondWord = database[1].word; 
    const thirdWord = database[2].word;
    const fourthWord = database[3].word;
    const fifthWord = database[4].word;    console.log(firstWord); 
    try {

        res.status(200).json({
            message: `Story completed`,
            results: `There was a person named ${firstWord}. They were a very ${secondWord} type of person. They had a favorite ${thirdWord}, which they always wore in their ${fourthWord}. It's absolutely ${fifthWord}.`
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        }); 
    }
});
module.exports = router;
