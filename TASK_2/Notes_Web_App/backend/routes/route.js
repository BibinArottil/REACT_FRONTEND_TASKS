import { Router } from "express";
import { addNote } from "../controllers/addNote.js";
import { getNote } from "../controllers/getNote.js";
import { deleteNote } from "../controllers/delete.js";

const note = Router();

note.route("/add-note").post(addNote);
note.route("/get-note").get(getNote);
note.route("/delete/:id").delete(deleteNote);

export default note;
