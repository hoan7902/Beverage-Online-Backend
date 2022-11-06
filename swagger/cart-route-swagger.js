/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: The Cart managing API
 */

/**
 * @swagger
 * /cart/get-all-cart:
 *   get:
 *     summary: Lấy toàn sản phẩm trong giỏ hàng
 *     tags: [Carts]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /cart/add-to-cart:
 *   post:
 *     summary: Thêm sản phẩm vào giỏ hàng
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               userId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /cart/remove-from-cart:
 *   delete:
 *     summary: Xóa sản phẩm vào giỏ hàng
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               userId:
 *                 type: string
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */
