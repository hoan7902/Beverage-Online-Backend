/**
 * @swagger
 * tags:
 *   name: Toppings
 *   description: The products managing API
 */

/**
 * @swagger
 * /topping/get-topping:
 *   get:
 *     summary: Lấy toàn bộ thể topping theo thể loại
 *     tags: [Toppings]
 *     parameters:
 *       - in: query
 *         name: typeId
 *         schema:
 *           type: string
 *         description: typeId của topping
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */
