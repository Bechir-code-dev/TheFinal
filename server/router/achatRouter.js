const express = require("express");
const achatRouter = express.Router();
const { Achat } = require("../models/achatSchema");
const { Ticket } = require("../models/ticketsSchema");
const { auth } = require("../middleware/auth");
const jwt = require("jsonwebtoken");


achatRouter.post("/addAchat", async (req, res) => {
  try {
    const { ticketId, userId } = req.body;

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ message: "ticket introuvable" });
    }
    if (ticket.quantity < 1) {
      return res.status(400).json({ message: "Quantité insuffisante en stock" });
    }

    // Diminuer la quantité du produit
    ticket.quantity -= 1;
    await ticket.save();

    // Créer un nouvel achat
    const newAchat = new Achat({
      userId,
      ticketId,
    });

    await newAchat.save();

    return res
      .status(200)
      .json({ message: "Achat du ticket réussi", newAchat });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur", error });
  }
});



achatRouter.get("/ticketOfUser", auth, async (req, res) => {
    try {
      const userId = req.user._id;
      const ticketOfUser = await Achat.find({ userId }).populate(
        "ticketId",
        "seates_zone totalprice quantity"
      );
  
      if (!ticketOfUser.length) {
        return res.status(404).json({ msg: "no ticket reserved for this user." });
      }
  
      res.status(200).json({ ticketOfUser });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des tickets :",
        error.message
      );
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = achatRouter;
