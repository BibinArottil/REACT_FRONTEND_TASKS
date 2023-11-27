import db from "../config/dbConfig.js";

export const deleteNote = (req, res) => {
  try {
    const noteId = req.params.id;
    const q = "DELETE FROM notes WHERE id = ?";
    db.query(q, [noteId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Note has been deleted");
    });
  } catch (error) {
    console.log(error.message);
  }
};
