let alphabet = {
    A: ["A", 48, 72, 96, 120, 192, 240, 384, 408, 432, 456, 504],
    B: ["B", 24, 48, 72, 96, 120, 192, 240, 288, 384, 432, 504],
    C: ["C", 24, 48, 72, 96, 120, 192, 288, 336],
    D: ["D", 24, 48, 72, 96, 120, 192, 288, 384, 408, 432, 504],
    E: ["E", 24, 48, 72, 96, 120, 192, 240, 288, 336],
    F: ["F", 24, 48, 72, 96, 120, 192, 240, 336],
    G: ["G", 24, 48, 72, 96, 120, 192, 288, 408, 432, 456, 504],
    H: ["H", 24, 48, 72, 96, 120, 240, 360, 384, 408, 432, 456, 504],
    I: ["i", 24, 72, 96, 120, 168],
    J: ["j", 120, 192, 240, 264, 336],
    K: ["K", 24, 48, 72, 96, 120, 240, 360, 384, 432, 456, 504],
    L: ["l", 24, 48, 72, 96, 120, 168],
    M: ["M", 24, 48, 72, 96, 120, 214, 360, 384, 408, 432, 456, 504],
    N: ["n", 24, 48, 72, 96, 120, 192, 384, 408, 432, 456, 504],
    O: ["O", 24, 48, 72, 96, 120, 192, 288, 360, 384, 408, 432, 456, 504],
    P: ["P", 24, 48, 72, 96, 120, 192, 240, 384, 504],
    Q: ["q", 48, 72, 96, 192, 288, 384, 408, 432, 456, 504],
    R: ["R", 24, 48, 72, 96, 120, 192, 240, 384, 432, 456, 504],
    S: ["S", 24, 48, 72, 120, 192, 240, 264, 288, 336],
    T: ["T", 24, 192, 214, 240, 264, 288, 360, 504],
    U: ["U", 24, 48, 72, 96, 288, 360, 384, 408, 432],
    V: ["V", 24, 48, 240, 264, 288, 360, 384, 504],
    W: ["W", 24, 48, 72, 264, 288, 384, 408, 600, 624],
    X: ["X", 24, 48, 96, 120, 240, 360, 384, 432, 456, 504],
    Y: ["y", 24, 48, 120, 240, 288, 360, 384, 408, 432, 504],
    Z: ["Z", 24, 96, 120, 192, 240, 288, 360, 384, 456, 504],
    SPACE: ['SPACE'],
    EXLAMARK: ['EXCLAMATION MARK', 24, 48, 72, 120, 168],
    QUESTMARK: ['QUESTION MARK', 24, 192, 240, 288, 360, 384, 408, 504],
    POINT: ["POINT", 120, 168],
    SPIDER: ["SPIDER", 72, 96, 120, 214, 240, 360, 384, 408, 432, 450, 504, 528, 576, 600, 648, 696, 720, 744, 768, 864, 888, 912, 936, 1032, 1056, 1080, 1104, 1176, 1200, 1248, 1272, 1320, 1368, 1392, 1416, 1440, 1464, 1560, 1584, 1752, 1776, 1800, 1848],
    HEART: ["HEART", 24, 48, 72, 168, 264, 336, 456, 528, 648, 672, 792, 840, 936, 1032, 1056, 1080, 1176],
    CAT: ["CAT", 96, 120, 168, 192, 214, 240, 288, 360, 408, 432, 456, 480, 528, 552, 576, 600, 624, 648, 672, 696, 744, 792, 816, 864, 888, 912, 1008],
    FACE: ["FACE", 48, 72, 96, 192, 288, 336, 384, 432, 480, 504, 600, 648, 672, 720, 768, 816, 864, 960, 1056, 1080, 1104, 1176],
    PACMAN: ["PACMAN", 48, 72, 96, 192, 214, 240, 264, 288, 336, 360, 384, 408, 432, 456, 480, 504, 528, 552, 576, 600, 624, 648, 672, 696, 720, 744, 768, 792, 816, 840, 864, 888, 936, 960, 984, 1032, 1128, 1248, 1584, 1680],
    HOUSE: ["HOUSE", 48, 192, 214, 240, 264, 288, 312, 336, 360, 384, 456, 480, 504, 528, 552, 624, 648, 696, 720, 744, 768, 792, 816, 888, 1008],
}

module.exports = alphabet;