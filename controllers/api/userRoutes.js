const router = require('express').Router();
const { restart } = require('nodemon');
const { User } = require('../../models');

router.post('/', async (req,res) =>{
    try{
        const {name, email, password} = req.body;
        const userData = await User.create({name, email, password});

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
      
            res.status(200).json(userData);
          });
        
    }catch(err){
        console.error(err);
        //instance of?
        res.status(500);
    }

});

router.post('/session', async (req, res) =>{

})

router.delete('/session', async (req, res) =>{
    
})



module.exports = router;
