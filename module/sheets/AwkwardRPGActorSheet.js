export class AwkwardRPGActorSheet extends ActorSheet {

  /** @override */
  get template() {
    console.log("AwkwardRPG | getting actor template");
    const path = "systems/awkwardrpg/templates/sheets/actor/actor-sheet.hbs";
    // Return a single sheet for all item types.
    // return `${path}/item-sheet.hbs`;
    // Alternatively, you could use the following return statement to do a
    // unique item sheet by type, like `weapon-sheet.hbs`.
    //var resultPath = `${path}/${this.item.type.toLowerCase()}-sheet.hbs`;
    console.log(path);
    return path;
  }
  
}
