namespace SpriteKind {
    export const SWAT = SpriteKind.create()
}
/**
 * Husk dette:
 */
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(35)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.percentChance(50)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 b c 5 5 d 4 c . . 
            . b b b b 5 5 5 b f d d 4 4 4 b 
            . b d 5 b 5 5 b c b 4 4 4 4 b . 
            . . b 5 5 b 5 5 5 4 4 4 4 b . . 
            . . b d 5 5 b 5 5 5 5 5 5 b . . 
            . b d b 5 5 5 d 5 5 5 5 5 5 b . 
            b d d c d 5 5 b 5 5 5 5 5 5 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, mySprite, 0, 50)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 b c 5 5 d 4 c . . 
            . b b b b 5 5 5 b f d d 4 4 4 b 
            . b d 5 b 5 5 b c b 4 4 4 4 b . 
            . . b 5 5 b 5 5 5 4 4 4 4 b . . 
            . . b d 5 5 b 5 5 5 5 5 5 b . . 
            . b d b 5 5 5 d 5 5 5 5 5 5 b . 
            b d d c d 5 5 b 5 5 5 5 5 5 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, mySprite, 0, -50)
    }
})
// dette er koden som gjør slkifjdsljkfhredojisfhdsjklfhdjks
sprites.onOverlap(SpriteKind.SWAT, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
info.onCountdownEnd(function () {
    for (let index = 0; index < lovbrudd; index++) {
        mySprite3 = sprites.create(img`
            ...........fffffff...ccfff..........
            ..........fbbbbbbbffcbbbbf..........
            ..........fbb111bbbbbffbf...........
            ..........fb11111ffbbbbff...........
            ..........f1cccc1ffbbbbbcff.........
            ..........ffc1c1c1bbcbcbcccf........
            ...........fcc3331bbbcbcbcccf..ccccc
            ............c333c1bbbcbcbccccfcddbbc
            ............c333c1bbbbbbbcccccddbcc.
            ............c333c11bbbbbccccccbbcc..
            ...........cc331c11bbbbccccccfbccf..
            ...........cc13c11cbbbcccccbbcfccf..
            ...........c111111cbbbfdddddc.fbbcf.
            ............cc1111fbdbbfdddc...fbbf.
            ..............cccfffbdbbfcc.....fbbf
            ....................fffff........fff
            `, SpriteKind.SWAT)
        if (Math.percentChance(50)) {
            tiles.placeOnRandomTile(mySprite3, sprites.castle.tilePath5)
            mySprite3.follow(mySprite, 200)
        } else {
            tiles.placeOnRandomTile(mySprite3, sprites.castle.tileGrass1)
            mySprite3.follow(mySprite, 200)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile0, function (sprite, location) {
    mySprite.setImage(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `)
    effects.clearParticles(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    mySprite.setImage(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `)
    mySprite.say("blubb blubb", 200)
    mySprite.startEffect(effects.spray)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    lovbrudd = 10
    info.startCountdown(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.castle.tilePath5)) {
        mySprite.y += -5
    } else if (mySprite.tileKindAt(TileDirection.Center, sprites.castle.tileGrass1)) {
        mySprite.y += 5
    }
})
let mySprite3: Sprite = null
let projectile: Sprite = null
let mySprite4: Sprite = null
let energi: Sprite = null
let mySprite: Sprite = null
let lovbrudd = 0
lovbrudd = 0
info.setScore(500)
tiles.setTilemap(tilemap`level`)
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
info.setLife(3)
if (Math.percentChance(20)) {
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
} else {
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
}
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 100; index++) {
    energi = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . f f 5 5 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . f f 5 f f . . . . . . 
        . . . . f f 5 5 f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f 5 5 f . . . . . 
        . . . . . . f 5 5 f f . . . . . 
        . . . . . f f 5 f f . . . . . . 
        . . . . . f 5 f f . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    if (Math.percentChance(80)) {
        tiles.placeOnRandomTile(energi, sprites.castle.tilePath5)
    } else {
        tiles.placeOnRandomTile(energi, sprites.castle.tileGrass1)
    }
}
let mySprite2 = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundSouthEast1)
for (let index = 0; index < 50; index++) {
    mySprite4 = sprites.create(img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(mySprite4, myTiles.tile1)
}
