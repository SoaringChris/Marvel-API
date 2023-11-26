interface Number{
    zeroPad(places: number): string
}

Number.prototype.zeroPad = function (places: number): string{
    return String(this).padStart(places, '0')
}