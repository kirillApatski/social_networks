export const updateObjectInArray = <T>(items: T[], itemId: number, objectPropName: string, newObjectProps: any ) => {
    // @ts-ignore
    return items.map(user => user[objectPropName] === itemId ? {...user, ...newObjectProps} : user)
}