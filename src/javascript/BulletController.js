class BulletController {
    bullets = [];
    timeTillNextBulletAllowed = 0;

    constructor(canvas, maxBulletAtATime, bulletColor, soundEnable) {
        this.canvas = canvas;
        this.maxBulletAtATime = maxBulletAtATime;
        this.bulletColor = bulletColor;
        this.soundEnable = soundEnable;

        this.bulletSound = new Audio("src/assets/sounds/shoot.wav");
        this.bulletSound.volume = 0.1;
    }
    draw(ctx) {
        this.bullets = this.bullets.filter(
            (bullet) => bullet.y + bullet.width > 0 && bullet <= this.canvas.height);

            this.bullets.forEach((bullet) => bullet.draw(ctx));

            if(this.timeTillNextBulletAllowed > 0) {
                this.timeTillNextBulletAllowed--;
         }
    }

            collideWith(sprite) {
            const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet) => bullet.collideWith
            (sprite));

             if(bulletThatHitSpriteIndex >= 0 ) {
             this.bullets.splice(bulletThatHitSpriteIndex, 1);
                return true;
         } 
      return false;
    }
 }
