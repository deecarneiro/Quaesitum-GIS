export function setMap(newMap) {
  const map = newMap
  this.setState({ map });
};

export function setMapName(mapName) {
  const map = { ...this.state.map }
  map.name = mapName;
  this.setState({ map });
};

export function setMapLayers(layers) {
  const map = { ...this.state.map }
  map.layers = layers;
  this.setState({ map });
};