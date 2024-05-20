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
}