import db from "../config/dbConfig.js";

export const getNote = (req, res) => {
  try {
    const q = "SELECT * FROM notes";
    db.query(q, (err, data) => {
      if (err) res.json(err);
      res.json(data);
    });
  } catch (error) {
    console.log(error.message);
  }
};
