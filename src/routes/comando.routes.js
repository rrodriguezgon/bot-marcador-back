const express = require("express");
const comandoController = require("../controllers/comandoController");
const router = express.Router();
// https://swagger.io/docs/specification/basic-structure/
/**
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
 * @swagger
 *  tags:
 *    name: comando
 *    description: Controlador de Comandos.
 * @swagger
 * /api/v1/comandos:
 *  get:
 *    tags: [comando]
 *    description: Use to request all comandos
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

/**
* @swagger
* /api/v1/comandos/Filters:
*  post:
*    tags: [comando]
*    description: Use to request all comandos
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

/**
* @swagger
* /api/v1/comandos/{id}:
*  get:
*    tags: [comando]
*    description: Use to request one comando
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

/**
* @swagger
* /api/v1/comandos:
*  post:
*    tags: [comando]
*    description: Use to request one comando
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

/**
* @swagger
* /api/v1/comandos/{id}:
*  patch:
*    tags: [comando]
*    description: Use to request one comando
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

/**
* @swagger
* /api/v1/comandos/{id}:
*  delete:
*    tags: [comando]
*    description: Use to request one comando
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
