Hooks.on('createItem', (document, options, userId) => {
    console.log("AwkwardRPG | Hooks create item");
});

Hooks.on('preCreateItem', (document, options, userId) => {
    console.log("AwkwardRPG | hooks pre create item");
});