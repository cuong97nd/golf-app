<template>
    <div class="sun">
        <div class="ray_box">
            <div class="ray ray1"></div>
            <div class="ray ray2"></div>
            <div class="ray ray3"></div>
            <div class="ray ray4"></div>
            <div class="ray ray5"></div>
            <div class="ray ray6"></div>
            <div class="ray ray7"></div>
            <div class="ray ray8"></div>
            <div class="ray ray9"></div>
            <div class="ray ray10"></div>
        </div>
    </div>
</template>

<style scope>
@keyframes runUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

.sun {
    position: absolute;
    right: 53px;
    top: 52px;
    margin: auto;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #faf20d;
    opacity: 0.9;
    box-shadow: 0px 0px 40px 15px #faf20d;
    animation: runUpDown 1.5s ease-in-out infinite;
}

.ray_box {
    position: absolute;
    margin: auto;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 70px;
    -webkit-animation: ray_anim 20s linear infinite;
    animation: ray_anim 20s linear infinite;
}

.ray {
    background: linear-gradient(top, #faf20d 0%, #faf20d 50%, #faf20d00 100%);
    background: -webkit-linear-gradient(top, #faf20d 0%, #faf20d 50%, #faf20d00 100%);
    margin-left: 10px;
    border-radius: 80% 80% 0 0;
    position: absolute;
    opacity: 0.1;
}

.ray1 {
    height: 170px;
    width: 30px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    top: -175px;
    left: 15px;
}

.ray2 {
    height: 100px;
    width: 8px;
    -webkit-transform: rotate(220deg);
    transform: rotate(220deg);
    top: -90px;
    left: 75px;
}

.ray3 {
    height: 170px;
    width: 50px;
    -webkit-transform: rotate(250deg);
    transform: rotate(250deg);
    top: -80px;
    left: 100px;
}

.ray4 {
    height: 120px;
    width: 14px;
    -webkit-transform: rotate(305deg);
    transform: rotate(305deg);
    top: 30px;
    left: 100px;
}

.ray5 {
    height: 140px;
    width: 30px;
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
    top: 60px;
    left: 40px;
}

.ray6 {
    height: 90px;
    width: 50px;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    top: 60px;
    left: -40px;
}

.ray7 {
    height: 180px;
    width: 10px;
    -webkit-transform: rotate(70deg);
    transform: rotate(70deg);
    top: -35px;
    left: -40px;
}

.ray8 {
    height: 120px;
    width: 30px;
    -webkit-transform: rotate(100deg);
    transform: rotate(100deg);
    top: -45px;
    left: -90px;
}

.ray9 {
    height: 80px;
    width: 10px;
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg);
    top: -65px;
    left: -60px;
}

.ray10 {
    height: 190px;
    width: 23px;
    -webkit-transform: rotate(150deg);
    transform: rotate(150deg);
    top: -185px;
    left: -60px;
}

@keyframes ray_anim {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes ray_anim {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>