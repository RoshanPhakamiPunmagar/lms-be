import { getABookById, updateABookById } from "../models/books/BookModel";

export const createBorrowHistory = async (req, res, next) => {
  try {
    //
    const userId = req.userInfo._id;
    const userName = req.userInfo.fname;
    const { bookId } = req.params;

    const book = await getABookById(bookId);
    if (book) {
      if (book.isAvailable) {
        const { bookTitle, thumbnail } = req.body;

        const dueDate = new Date(today.setDate(today.getDate() + 15));

        // update book availability
        const updatebook = await updateABookById(bookId, {
          isAvailable: false,
        });
        // creating a borrow
        const borrowHistory = await insertBorrow({
          userName,
          userId,
          bookId,
          bookTitle,
          thumbnail,
          dueDate,
        });

        return res.json({
          status: "success",
          message: "Book Borrowed",
        });
      } else {
        next({
          status: 404,
          message: "Book not Available",
        });
      }
    } else {
      next({
        status: 404,
        message: "Book not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
