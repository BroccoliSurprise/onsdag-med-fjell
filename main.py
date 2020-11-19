@namespace
class SpriteKind:
    SWAT = SpriteKind.create()

def on_a_pressed():
    global projectile
    if Math.percent_chance(50):
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            mySprite,
            0,
            50)
    else:
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            mySprite,
            0,
            -50)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# dette er koden som gjør slkifjdsljkfhredojisfhdsjklfhdjks

def on_on_overlap(sprite, otherSprite):
    game.over(False)
sprites.on_overlap(SpriteKind.SWAT, SpriteKind.player, on_on_overlap)

def on_countdown_end():
    global mySprite3
    for index in range(lovbrudd):
        mySprite3 = sprites.create(img("""
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
            """),
            SpriteKind.SWAT)
        if Math.percent_chance(50):
            tiles.place_on_random_tile(mySprite3, sprites.castle.tile_path5)
            mySprite3.follow(mySprite, 200)
        else:
            tiles.place_on_random_tile(mySprite3, sprites.castle.tile_grass1)
            mySprite3.follow(mySprite, 200)
info.on_countdown_end(on_countdown_end)

def on_overlap_tile(sprite, location):
    mySprite.set_image(img("""
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
    """))
    effects.clear_particles(mySprite)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile0, on_overlap_tile)

def on_on_overlap2(sprite, otherSprite):
    otherSprite.destroy()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_overlap_tile2(sprite, location):
    mySprite.set_image(img("""
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
    """))
    mySprite.say("blubb blubb", 200)
    mySprite.start_effect(effects.spray)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile1, on_overlap_tile2)

def on_on_overlap3(sprite, otherSprite):
    global lovbrudd
    otherSprite.destroy()
    lovbrudd = 10
    info.start_countdown(10)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap3)

def on_on_overlap4(sprite, otherSprite):
    if mySprite.tile_kind_at(TileDirection.CENTER, sprites.castle.tile_path5):
        mySprite.y += -5
    elif mySprite.tile_kind_at(TileDirection.CENTER, sprites.castle.tile_grass1):
        mySprite.y += 5
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap4)

mySprite3: Sprite = None
projectile: Sprite = None
energi: Sprite = None
mySprite: Sprite = None
lovbrudd = 0
lovbrudd = 0
tiles.set_tilemap(tilemap("""
    level
"""))
scene.set_background_color(9)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
info.set_life(3)
if Math.percent_chance(20):
    tiles.place_on_random_tile(mySprite, sprites.castle.tile_path5)
else:
    tiles.place_on_random_tile(mySprite, sprites.castle.tile_grass1)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)
for index2 in range(100):
    energi = sprites.create(img("""
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
        """),
        SpriteKind.food)
    if Math.percent_chance(80):
        tiles.place_on_random_tile(energi, sprites.castle.tile_path5)
    else:
        tiles.place_on_random_tile(energi, sprites.castle.tile_grass1)
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
tiles.place_on_random_tile(mySprite2, sprites.dungeon.dark_ground_south_east1)