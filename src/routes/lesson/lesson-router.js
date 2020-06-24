const router = require('express').Router();
const { lessonController } = require('../../controllers');

router.post( '/', lessonController.createUser) ;

// router.post('/', (req, res, next) => {
//   const product = new Lesson({
//     _id: new mongoose.Types.ObjectId(),
//     theme: req.body.theme,
//     classRoom: req.body.classRoom,
//   });
//   product
//         .save()
//         .then((result) => {
//           console.log(result);
//           res.status(201).json({
//             message: 'Created product successfully',
//             createdProduct: {
//               name: result.name,
//               price: result.price,
//               _id: result._id,
//               request: {
//                 type: 'GET',
//                 url: `http://localhost:5000/products/${result._id}`,
//               },
//             },
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).json({
//             error: err,
//           });
//         });
// });
module.exports = router;
