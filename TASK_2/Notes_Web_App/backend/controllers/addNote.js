import db from "../config/dbConfig.js";

export const addNote = async (req, res) => {
  try {
    const q = "INSERT INTO notes (`text`) VALUES (?)";
    const values = [req.body.text];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("Note has been created");
    });
  } catch (error) {
    console.log(error.message);
  }
};
