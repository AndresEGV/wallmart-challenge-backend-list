const express = require("express");
const router = express.Router();
const shipController = require("../controllers/shipController");

/**
 * @swagger
 * components:
 *  schemas:
 *    Ship:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the ship name
 *        model:
 *          type: string
 *          description: the ship model
 *        manufacter:
 *          type: string
 *          description: the ship manufacter
 *        passangers:
 *          type: number
 *          description: the ship passangers
 *        starShipClass:
 *          type: string
 *          description: the  star Ship Class
 *        cargoCapacity:
 *          type: number
 *          description: the ship cargo Capacity
 *      required:
 *        - name
 *        - model
 *        - passangers
 *        - starShipClass
 *        - cargoCapacity
 *      example:
 *        name: Star-X Rebel
 *        model: StarWing
 *        manufacter: Andres
 *        passangers: 4
 *        starShipClass: Fighter
 *        cargoCapacity: 400
 *  */

/**
 * @swagger
 * /api/interstellar-ships:
 *  get:
 *    summary: Get all ships
 *    tags: [Ship]
 *    responses:
 *      200:
 *         description: all ships
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ship'
 *
 * */

router.get("/", shipController.getAllShips);

module.exports = router;
