const express = require("express");
const logController = require("../controllers/logController");
const router = express.Router();

/** Component
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
 */

/** Tag 
 * @swagger
 *  tags:
 *    name: log
 *    description: Controlador de Logs.
 */

/** GET - /api/v1/logs
 * @swagger
 * /api/v1/logs:
 *  get:
 *    tags: [log]
 *    description: Use to request all Log
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
 *                      $ref: '#/components/schemas/Log'
 */
router.get("/", logController.getAllLogs);

/** POST - /api/v1/logs/Filters
* @swagger
* /api/v1/logs/Filters:
*  post:
*    tags: [log]
*    description: Use to request all Log
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
*                      $ref: '#/components/schemas/Log'
*/
router.post("/filters", logController.getAllLogsWithFilters);

module.exports = router;
