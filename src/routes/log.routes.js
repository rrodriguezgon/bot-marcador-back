const express = require("express");
const logController = require("../controllers/logController");
const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *   Log:
 *    type: object
 *    properties:
 *     _id: 
 *      type: string
 *     nameCommand: 
 *      type: string
 *     type: 
 *      type: string
 *     date: 
 *      type: string
 *      format: date-time
 *     stacktrace: 
 *      type: array
 *      items:
 *       type: string
 *     __v: 
 *      type: integer
 *      format: int32
 * @swagger
 *  tags:
 *    name: log
 *    description: Controlador de Logs.
 * @swagger
 * /api/v1/logs:
 *  get:
 *    tags: [log]
 *    description: Use to request all Log
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Log'
 */
router.get("/", logController.getAllLogs);

/**
* @swagger
* /api/v1/logs/Filters:
*  post:
*    tags: [torneo]
*    description: Use to request all Log
*    responses:
*      '200':
*        description: A successful response
*        content:
*          application/json:
*              schema:
*                  type: array
*                  items:
*                      $ref: '#/components/schemas/Log'
*/
router.post("/filters", logController.getAllLogsWithFilters);

module.exports = router;
