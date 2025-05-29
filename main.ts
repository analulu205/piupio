controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    piupio = sprites.create(assets.image`turkey`, SpriteKind.Ball)
    tiles.placeOnRandomTile(piupio, assets.tile`start`)
    piupio.follow(sprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    carnival.onGameOverExpanded(carnival.WinTypes.Timed)
})
let piupio: Sprite = null
let bigTurkey: Sprite = null
bigTurkey = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
tiles.placeOnRandomTile(bigTurkey, sprites.castle.tilePath2)
carnival.startTimer()
