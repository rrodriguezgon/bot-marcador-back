const express = require("express");
const comandoController = require("../controllers/comandoController");
const router = express.Router();

// https://swagger.io/docs/specification/basic-structure/
/** Component
 * @swagger
 * components:
 *  schemas:
 *   Comando:
 *     type: object
 *     properties:
 *      _id:
 *          type: string
 *      nombre:
 *          type: string
 *      __v:
 *          type: integer
 *          format: int32
 *      parametros:
 *          type: array
 *          items:
 *              type: string
 *      tipo:
 *          type: string
 *      intervalo:
 *          type: integer
 *          format: int32
 *      ultimaFechaEjecucion:
 *          type: string
 *          format: date-time
 *      activo:
 *          type: boolean
 *      lanzado:
 *          type: boolean
 */

/** Tag
 * @swagger
 *  tags:
 *    name: comando
 *    description: Controlador de Comandos.
 */

/** GET - /api/v1/comandos
 * @swagger
 * /api/v1/comandos:
 *  get:
 *    tags: [comando]
 *    description: Use to request all comandos
 *    security:
 *     - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Comando'
 */
router.get("/", comandoController.getAllComandos);

/** POST - /api/v1/comandos/Filters
* @swagger
* /api/v1/comandos/Filters:
*  post:
*    tags: [comando]
*    description: Use to request all comandos
*    security:
*     - bearerAuth: []
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: array
*                  items:
*                      $ref: '#/components/schemas/Comando'
*/
router.post("/filters", comandoController.getAllComandosWithFilters);

/** GET - /api/v1/comandos/{id}
* @swagger
* /api/v1/comandos/{id}:
*  get:
*    tags: [comando]
*    description: Use to request one comando
*    security:
*     - bearerAuth: []
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: Numeric ID of the comando to get
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Comando'
*/
router.get("/:id", comandoController.getComandoById);

/** POST - /api/v1/comandos
* @swagger
* /api/v1/comandos:
*  post:
*    tags: [comando]
*    description: Use to request one comando
*    security:
*     - bearerAuth: []
*    requestBody:
*      description: Nuevo objeto
*      content:
*        application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Comando'
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Comando'
*/
router.post("/", comandoController.createComando);

/** PATCH - /api/v1/comandos/{id}
* @swagger
* /api/v1/comandos/{id}:
*  patch:
*    tags: [comando]
*    description: Use to request one comando
*    security:
*     - bearerAuth: []
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: Numeric ID of the comando to get
*    requestBody:
*      description: Nuevo objeto
*      content:
*        application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Comando'
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: object
*                  $ref: '#/components/schemas/Comando'
*/
router.patch("/:id", comandoController.updateComando);

/** DELETE - /api/v1/comandos/{id}
* @swagger
* /api/v1/comandos/{id}:
*  delete:
*    tags: [comando]
*    description: Use to request one comando
*    security:
*     - bearerAuth: []
*    parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: Numeric ID of the comando to get
*    responses:
*      '200':
*        description: A successful response
*/
router.delete("/:id", comandoController.deleteComando);

module.exports = router;
