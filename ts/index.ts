import('../pkg').then(async module => {
    console.log(module);
    console.log(module.start('123'))
})
