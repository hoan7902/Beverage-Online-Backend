/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: The orders managing API
 */

/**
 * @swagger
 * /order/add-order:
 *   post:
 *     summary: Thêm một order mới
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               phoneNumber:
 *                 type: string
 *               userName:
 *                  type: string
 *               listProduct:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/ProductOfOrder'
 *               totalPrice:
 *                 type: number
 *               isPay:
 *                 type: boolean
 *               status:
 *                 type: string
 *               address:
 *                 type: string
 *               userId:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /order/complete-order:
 *   post:
 *     summary: Đã nhận được hàng
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               userId:
 *                 type: string
 *                 description: Id của người dùng
 *               orderId:
 *                  type: string
 *                  description: Id của đơn hàng
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /order/get-list-order:
 *   post:
 *     summary: Lấy danh sách các đơn hàng theo người dùng
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               userId:
 *                 type: string
 *                 description: Id của người dùng
 *               status:
 *                  type: string
 *                  description: Trạng thái của đơn hàng
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */
