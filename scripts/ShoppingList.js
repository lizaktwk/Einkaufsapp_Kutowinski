class ShoppingList {
    constructor(itemList, listName) {
        this._itemList = itemList;
        this._listName = listName;
    }


    get itemList() {
        return this._itemList;
    }

    set itemList(value) {
        this._itemList = value;
    }

    get listName() {
        return this._listName;
    }

    set listName(value) {
        this._listName = value;
    }

    get uuid() {
        return this._uuid;
    }

    set uuid(value) {
        this._uuid = value;
    }

}