const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user'); // Import User model from Sequelize. Hay que checar que esto mat
const  GeneralData  = require('../../models/GeneralData');
const Routine = require('../../models/Routine');
const Beginner = require('../../models/beginner');
const  IntAdvObj = require ('../../models/IntAdvObj');
const Level = require('../../models/Level');
const Records = require('../../models/Records');


// POST //signup - Handle user signup
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user record in the database
        const newUser = await User.create({ username, email, password: hashedPassword });
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});

// POST /login - Handle user login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email in the database
        const user = await User.findOne({ where: { email } });

        // If user not found or password doesn't match, return error
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid email or password');
        }

        // Authentication successful, set session and redirect
        req.session.userId = user.id; // Store user ID in session 
        res.redirect('/routine'); // Redirect to routine page upon successful login
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal server error');
    }
});

//---------------General Data 

// Route to create a new general data entry
router.post('/GeneralData', async (req, res) => {
    try {
      const newGeneralData = await GeneralData.create(req.body);
      res.status(201).json(newGeneralData);
    } catch (error) {
      console.error('Error creating general data:', error);
      res.status(500).json({ error: 'Failed to create general data' });
    }
  });
  
  
  // retrieve a specific general data entry by ID
  router.get('/GeneralData/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const generalData = await GeneralData.findByPk(id);
      if (!generalData) {
        return res.status(404).json({ error: 'General data entry not found' });
      }
      res.json(generalData);
    } catch (error) {
      console.error('Error retrieving general data:', error);
      res.status(500).json({ error: 'Failed to retrieve general data' });
    }
  });
  
  // Update specific entry by ID
  router.put('/GeneralData/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const [updatedRowsCount, updatedGeneralData] = await GeneralData.update(req.body, {
        where: { id },
        returning: true,
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: 'General data entry not found' });
      }
      res.json(updatedGeneralData[0]);
    } catch (error) {
      console.error('Error updating general data:', error);
      res.status(500).json({ error: 'Failed to update general data' });
    }
  });
  
  //delete a specific entry by ID
  router.delete('/generaldata/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const deletedRowCount = await GeneralData.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: 'General data entry not found' });
      }
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting general data:', error);
      res.status(500).json({ error: 'Failed to delete general data' });
    }
  });
  // Routes for levels 
  router.post('/levels', async (req, res) => {
    try {
      const newLevel = await Level.create(req.body);
      res.status(201).json(newLevel); // Respond with the created level entry
    } catch (error) {
      console.error('Error creating level:', error);
      res.status(500).json({ error: 'Failed to create level' });
    }
  });

  
  // get level by id
  router.get('/levels/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const level = await Level.findByPk(id);
      if (!level) {
        return res.status(404).json({ error: 'Level entry not found' });
      }
      res.json(level); // Respond with the retrieved level entry
    } catch (error) {
      console.error('Error retrieving level:', error);
      res.status(500).json({ error: 'Failed to retrieve level' });
    }
  });
  
  //update a specific level entry by ID
  router.put('/levels/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const [updatedRowsCount, updatedLevel] = await Level.update(req.body, {
        where: { id },
        returning: true, // Return the updated level entry
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: 'Level entry not found' });
      }
      res.json(updatedLevel[0]); // Respond with the updated level entry
    } catch (error) {
      console.error('Error updating level:', error);
      res.status(500).json({ error: 'Failed to update level' });
    }
  });
  
  // Delete a level
  router.delete('/levels/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const deletedRowCount = await Level.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: 'Level entry not found' });
      }
      res.status(204).send(); // Respond with no content (success)
    } catch (error) {
      console.error('Error deleting level:', error);
      res.status(500).json({ error: 'Failed to delete level' });
    }
  });



//Beginner
//retrieves a json with beginner info. updated for specific user by id.
router.get("/users/:userId", async (req, res) => {
    const userId = req.params.userId; // Extract userId from request parameters
    try {
      // find the beginner record associated with the userId
      const beginner = await Beginner.findOne({ where: { userId } });
  
      if (!beginner) {
        // If no beginner record  return 404 Not Found
        return res.status(404).json({ error: 'Beginner record not found for this user' });
      }
  
      // Send the found beginner record as JSON response
      res.json(beginner);
    } catch (error) {
      // Handle  errors on database query
      console.error('Error fetching beginner record:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
//INT/ADV OBJECTIVES
//Retrieves objectives on adv and intermediates

router.get('/intadvobj/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const intAdvObj = await IntAdvObj.findByPk(id);
      if (!intAdvObj) {
        return res.status(404).json({ error: 'Intermediate/advanced objective entry not found' });
      }
      res.json(intAdvObj); // Respond with the retrieved objective entry
    } catch (error) {
      console.error('Error retrieving intermediate/advanced objective:', error);
      res.status(500).json({ error: 'Failed to retrieve intermediate/advanced objective' });
    }
  });


//Records routes 
//do we need to delete? cause we would update. also post? cause the info is obtained from GD

 // Route to retrieve a specific record entry by ID
router.get('/records/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const record = await Records.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: 'Record entry not found' });
    }
    res.json(record); // Respond with the retrieved record entry
  } catch (error) {
    console.error('Error retrieving record:', error);
    res.status(500).json({ error: 'Failed to retrieve record' });
  }
});

// update a record entry by ID
router.put('/records/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const [updatedRowsCount, updatedRecord] = await Records.update(req.body, {
      where: { id },
      returning: true, // Return the updated record entry
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Record entry not found' });
    }
    res.json(updatedRecord[0]); // Respond with the updated record entry
  } catch (error) {
    console.error('Error updating record:', error);
    res.status(500).json({ error: 'Failed to update record' });
  }
});

module.exports = router;
