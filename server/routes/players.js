var express = require('express');
var router = express.Router();

const Player = require('../models/player');

function returnError(res, error) {
  res.status(500).json({
    message: 'An error occurred',
    error: error
  });
}

router.get('/', (req, res, next) => {
  Player.find()
    .then(players => {
      res.status(200).json({
        message: 'Players fetched successfully',
        players: players
      });
    })
    .catch(error => {
      returnError(res, error);
    });
  }
);

router.get('/:id/:name', (req, res, next) => {
  Player.findOne({id: req.body.id, name: req.body.name})
    .then(players => {
      // res.send(players);
      res.status(200).json({
        message: 'Players fetched successfully',
        players: players
      });
    })
    .catch(error => {
      returnError(res, error);
    });
  }
);

router.post('/', (req, res, next) => {
  const player = new Player({
    id: req.body.id,
    name: req.body.name,
    points: req.body.points
  });

  player.save()
    .then(createdPlayer => {
      res.status(201).json({
        message: 'Player added successfully',
        playerId: createdPlayer._id
      });
    })
    .catch(error => {
      returnError(res, error);
    });
});

router.put('/:id/:name', (req, res, next) => {
  Player.findOne({id: req.body.id, name: req.body.name})
    .then(player => {
      player.points = player.points.concat(req.body.points);

      Player.updateOne({ id: req.params.id, name: req.body.name}, player)
        .then(result => {
          res.status(204).json({
            message: 'Document updated successfully'})
        })
        .catch(error => {
          returnError(res, error);
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Player not found.',
        error: { player: 'Player not found'} 
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Player.findOne({ id: req.params.id })
    .then(player => {
      Player.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({ message: "Player deleted successfully" });
        })
        .catch(error => {
          returnError(res, error);
        })
    })
    .catch(error => {
      returnError(res, error);
    });
});

module.exports = router;
