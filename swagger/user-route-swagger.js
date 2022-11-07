/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /user/login-user:
 *   post:
 *     summary: Đăng nhập
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /user/create-user:
 *   post:
 *     summary: Đăng Ký
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /user/change-user-information:
 *   post:
 *     summary: Đổi thông tin người dùng
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/UpdateUserInformationResponse'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /user/change-user-password:
 *   post:
 *     summary: Đổi mật khẩu tài khoản
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/ChangePasswordResponse'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /user/get-detail-user:
 *   post:
 *     summary: Lấy thông tin người dùng
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               userId:
 *                 type: string
 *                 description: Id người dùng
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /user/verify-user:
 *   post:
 *     summary: Xác thực số điện thoại
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 description: Số điện thoại
 *               code:
 *                 type: number
 *                 description: Mã code được gửi về số điện thoại
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */

/**
 * @swagger
 * /user/forgot-password:
 *   post:
 *     summary: Quên mật khẩu
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 description: Số điện thoại
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BaseResponse'
 */
