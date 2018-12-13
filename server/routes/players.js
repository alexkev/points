var express = require('express');
var router = express.Router();

const Player = require('../models/player');

function returnError(res, error) {
  res.status(500).json({
    players: 'An error occurred',
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

router.post('/', (req, res, next) => {
  const players = new Player({
    id: req.body.id,
    name: req.body.name,
    points: req.body.points
  });

  players.save()
    .then(createdMessage => {
      res.status(201).json({
        players: 'Player added successfully',
        messageId: createdMessage.id
      });
    })
    .catch(error => {
      returnError(res, error);
    });
});

router.put('/:id', (req, res, next) => {
  Player.findOne({ id: req.params.id })
    .then(players => {
      players.name = req.body.name;
      players.points = req.body.points;

      Player.updateOne({ id: req.params.id }, players)
        .then(result => {
          res.status(204).json({
            players: 'Player updated successfully'})
        })
        .catch(error => {
          returnError(res, error);
        });
    })
    .catch(error => {
      res.status(500).json({
        players: 'Player not found.',
        error: { players: 'Player not found'}
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Player.findOne({ id: req.params.id })
    .then(players => {
      Player.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({ players: "Player deleted successfully" });
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
