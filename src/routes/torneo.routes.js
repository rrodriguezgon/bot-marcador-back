const express = require("express");
const torneoController = require("../controllers/torneoController");
const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   Torneo:
 *     type: object
 *     properties:
 *      _id:
 *          type: string
 *      linkTorneo:
 *          type: string
 *      __v:
 *          type: integer
 *          format: int32
 *      circuito:
 *          type: string
 *      cuadros:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  genero:
 *                      type: string
 *                  fase:
 *                      type: string
 *                  _id:
 *                      type: string
 *                  url:
 *                      type: string
 *      estado:
 *          type: string
 *      fechaFin:
 *          type: string
 *      fechaInicio:
 *          type: string
 *      horarios:
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  dia:
 *                      type: string
 *                  url:
 *                      type: string
 *                  _id:
 *                      type: string
 *      localizacion:
 *          type: string
 *      nombre:
 *          type: string
 *      tipo:
 *          type: string
 *      linkMarcador:
 *          type: string
 * @swagger
 *  tags:
 *    name: torneo
 *    description: Controlador de Torneos.
 * @swagger
 * /api/v1/torneos:
 *  get:
 *    tags: [torneo]
 *    description: Use to request all torneos
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Torneo'
 */
router.get("/", torneoController.getAllTorneos);

module.exports = router;
