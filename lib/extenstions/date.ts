interface Date{
    toQueryFormat(): string
}

Date.prototype.toQueryFormat = function(): string{
    let year = this.getFullYear().zeroPad(4);
    let month = this.getMonth().zeroPad(2);
    let day = this.getDay().zeroPad(2);
    return `${year}-${month}-${day}`;
}