namespace SpriteKind {
    export const button = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`cheese_Blast`, dorito, 50, 0)
    music.pewPew.play()
})
let STARS: Sprite = null
let healthbar: Sprite = null
let projectile: Sprite = null
let dorito: Sprite = null
info.setScore(0)
dorito = sprites.create(assets.image`david_Dorito`, SpriteKind.Player)
controller.moveSprite(dorito, 100, 100)
dorito.setPosition(10, 59)
dorito.setStayInScreen(true)
game.onUpdate(function () {
    if (info.score() == 10) {
        healthbar = sprites.createProjectileFromSide(assets.image`heart_One`, randint(-100, -10), 0)
        healthbar.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    } else {
    	
    }
})
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        STARS = sprites.createProjectileFromSide(assets.image`star1`, randint(-100, -10), 0)
        STARS.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    }
})
