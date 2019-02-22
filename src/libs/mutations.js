Number.prototype.nairatize = function() {
  return "N" + this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}