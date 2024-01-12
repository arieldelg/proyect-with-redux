const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

const featuring = (store) => (next) => (nombreDeVariable) => {
    const featured = [{ name: 'ariel'}, ... nombreDeVariable.action.payload]
    const updatedAction = {...nombreDeVariable, action: {...nombreDeVariable.action, payload: featured}}
    next(updatedAction)
}

const firstName = (store) => (next) => (firstNameVariable) => {
    const firstNamePokemon = firstNameVariable.action.payload.map(element => {
        return `Pokemon ${element.name}`
    })
    const updateActionName = {...firstNameVariable, action: { ...firstNameVariable.action, payload: firstNamePokemon}}
    next(updateActionName)
}

export { logger, featuring, firstName }