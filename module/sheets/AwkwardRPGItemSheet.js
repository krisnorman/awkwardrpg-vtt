export class AwkwardRPGItemSheet extends ItemSheet {
 
  /** @override */
  get template() {
    console.log("AwkwardRPG | getting item template");
    const path = "systems/awkwardrpg/templates/sheets";
    // Return a single sheet for all item types.
    // return `${path}/item-sheet.hbs`;
    // Alternatively, you could use the following return statement to do a
    // unique item sheet by type, like `weapon-sheet.hbs`.
    var resultPath = `${path}/${this.item.type.toLowerCase()}-sheet.hbs`;
    console.log(resultPath);
    return resultPath;
  }

}
