import express from "express";
const router = express.Router();
import Rastreio from "../model/rastreio.js";
import { rastrearEncomendas } from "correios-brasil";

// GET ALL
router.get("/:codRastreio", async (req, res) => {
  try {
    let codRastreio = [req.params.codRastreio.toLocaleUpperCase()]; // array de códigos de rastreios

    await rastrearEncomendas(codRastreio).then((response) => {
      res.status(200).json(response[0]);
    });
  } catch (error) {
    res.status(500).json({ error: "Não foi possível encontrar seu rastreio." });
  }
});

// GET by ID
router.get("/:id", async (req, res) => {
  // const id = req.params.id;

  try {
    // const rastreio = await Rastreio.findOne({ codrastreio: id });
    // let codRastreio = ["LB546523299HK"];
    // rastrearEncomendas(req.params.id).then((response) => {
    //   res.status(200).json(response[0]);
    // });
    // if (!rastreio) {
    //   res
    //     .status(422)
    //     .json({ error: "Não foi possível encontrar o seu pedido." });
    //   return;
    // }
  } catch (error) {
    res.status(500).json({ error: "Não foi possível encontrar seu rastreio" });
  }
});

export default router;
