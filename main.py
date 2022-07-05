@namespace
class SpriteKind:
    button = SpriteKind.create()
mySprite = sprites.create(assets.image("""
    david_Dorito
"""), SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)