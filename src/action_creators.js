export function toggleItem(id){
    return {
      type: 'TOGGLE_ITEM',
      id// is the same as id:id in ES6
    };
}