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

router.get("/:id", comandoController.getComandoById);

router.post("/", comandoController.createComando);

router.patch("/:id", comandoController.updateComando);

router.delete("/:id", comandoController.deleteComando);

module.exports = router;
