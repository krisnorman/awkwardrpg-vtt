import { AwkwardRPGActorSheet } from "./module/sheets/AwkwardRPGActorSheet.js"; 
import { AwkwardRPGItemSheet } from "./module/sheets/AwkwardRPGItemSheet.js";

// Pre-load templates
async function preloadHandlebarsTemplates() {
  const templatePaths = [
    "systems/awkwardrpg/templates/sheets/weapon-sheet.hbs",
    "systems/awkwardrpg/templates/sheets/actor/actor-sheet.hbs",
  ];
  console.log("AwkwardRPG | preloading template paths");
  return loadTemplates(templatePaths);
}

Hooks.once("init", () => {
  console.log("AwkwardRPG | Initializing Awkward RPG System");

  console.log("AwkwardRPG | Registering Actor Sheet");
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("awkwardrpg", AwkwardRPGActorSheet, {
    types: ["character"],
    makeDefault: true,
    label: "Character",
  });

  console.log("AwkwardRPG | Registering Item Sheet");
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("awkwardrpg", AwkwardRPGItemSheet, {
    types: ["weapon", "vehicle"],
    makeDefault: true,
    label: "Items",
  });

 

  preloadHandlebarsTemplates();
});

Hooks.once("ready", async function () {
  console.log("AwkwardRPG | ready hook fired");
});
