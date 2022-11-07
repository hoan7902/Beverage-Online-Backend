/**
 * @swagger
 * components:
 *   schemas:
 *     BaseResponse:
 *       type: object
 *       properties:
 *         code:
 *           type: number
 *           description: Trạng thái của response
 *         message:
 *           type: string
 *           description: Message của response
 *         data:
 *           type: object
 *           description: Dữ liệu trả về
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - phoneNumber
 *         - password
 *       properties:
 *         phoneNumber:
 *           type: string
 *         password:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserInfomation:
 *       type: object
 *       required:
 *         - phoneNumber
 *         - password
 *       properties:
 *         phoneNumber:
 *           type: string
 *           description: Số điện thoại
 *         password:
 *           type: string
 *           description: Mật khẩu
 *         userName:
 *           type: string
 *           description: Tên người dùng
 *         avatar:
 *           type: string
 *           description: Đường dẫn ảnh đại diện
 *         email:
 *           type: string
 *           description: Địa chỉ email
 *         birthDate:
 *           type: string
 *           description: Ngày tháng năm sinh
 *         isActive:
 *           type: boolean
 *           description: Trạng thái tài khoản
 *         admin:
 *           type: boolean
 *           description: Có phải admin hay không
 *         code:
 *           type: string
 *           description: Mã code xác thực
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateUserInformationResponse:
 *       type: object
 *       required:
 *         - phoneNumber
 *         - password
 *       properties:
 *         userName:
 *           type: string
 *           description: Tên người dùng
 *         avatar:
 *           type: string
 *           description: Đường dẫn ảnh đại diện
 *         email:
 *           type: string
 *           description: Địa chỉ email
 *         birthDate:
 *           type: string
 *           description: Ngày tháng năm sinh
 *         userId:
 *           type: string
 *           description: id của tài khoản
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ChangePasswordResponse:
 *       type: object
 *       required:
 *         - phoneNumber
 *         - password
 *         - newPassword
 *       properties:
 *         phoneNumber:
 *           type: string
 *           description: Số điện thoại
 *         password:
 *           type: string
 *           description: Mật khẩu hiện tại
 *         newPassword:
 *           type: string
 *           description: Mật khẩu mới
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductOfOrder:
 *       type: object
 *       required:
 *         - productId
 *         - name
 *         - price
 *         - image
 *         - quantity
 *         - popular
 *       properties:
 *         productId:
 *           type: string
 *           description: id của sản phẩm
 *         name:
 *           type: string
 *           description: Tên sản phẩm
 *         price:
 *           type: number
 *           description: Giá
 *         image:
 *           type: string
 *           description: Đường dẫn hình ảnh
 *         quantity:
 *           type: number
 *           description: số lượng
 *         popular:
 *           type: number
 *           description: Độ phổ biến
 *         toppings:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ToppingOfProduct'
 *           description: Danh sách các topping
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ToppingOfProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Tên sản phẩm
 *         price:
 *           type: number
 *           description: Giá
 *         image:
 *           type: string
 *           description: Đường dẫn hình ảnh
 *         quantity:
 *           type: number
 *           description: số lượng
 */
