const express = require("express");
const torneoController = require("../controllers/torneoController");
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

// https://swagger.io/docs/specification/basic-structure/
/** Component
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
 *      fechaInicioDate:
 *          type: string
 *      fechaFinDate:
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
 */

/** Tag
 * @swagger
 *  tags:
 *    name: torneo
 *    description: Controlador de Torneos.
 */

/** GET - /api/v1/torneos
 * @swagger
 * /api/v1/torneos:
 *  get:
 *    tags: [torneo]
 *    description: Use to request all torneos
 *    security:
 *      - bearerAuth: []
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

/** POST - /api/v1/torneos/Filters
* @swagger
* /api/v1/torneos/Filters:
*  post:
*    tags: [torneo]
*    description: Use to request all torneos
*    security:
*      - bearerAuth: []
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
router.post("/filters", torneoController.getAllTorneosWithFilters);

/** GET - /api/v1/torneos/{id}
* @swagger
* /api/v1/torneos/{id}:
*  get:
*    tags: [torneo]
*    description: Use to request one torneo
*    security:
*      - bearerAuth: []
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: Numeric ID of the torneo to get
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Torneo'
*/
router.get("/:id", torneoController.getTorneoById);

module.exports = router;
