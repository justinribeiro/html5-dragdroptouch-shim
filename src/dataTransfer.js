export default class DataTransfer {
  constructor() {
    this._dropEffect = "move";
    this._effectAllowed = "all";
    this._data = {};
  }

  /**
   * Gets or sets the type of drag-and-drop operation currently selected.
   * The value must be 'none',  'copy',  'link', or 'move'.
   */
  get dropEffect() {
    return this._dropEffect;
  }

  set dropEffect(value) {
    this._dropEffect = value;
  }

  get effectAllowed() {
    return this._effectAllowed;
  }

  set effectAllowed(value) {
    this._effectAllowed = value;
  }

  get types() {
    return Object.keys(this._data);
  }

  /**
   * Removes the data associated with a given type.
   *
   * The type argument is optional. If the type is empty or not specified, the data
   * associated with all types is removed. If data for the specified type does not exist,
   * or the data transfer contains no data, this method will have no effect.
   *
   * @param type Type of data to remove.
   */
  clearData(type) {
    if (type != null) {
      delete this._data[type];
    } else {
      this._data = null;
    }
  }

  getData(type) {
    return this._data[type] || "";
  }

  setData(type, value) {
    this._data[type] = value;
  }

  setDragImage = function (instance, img, offsetX, offsetY) {
    instance._imgCustom = img;
    instance._imgOffset = { x: offsetX, y: offsetY };
  };
}
