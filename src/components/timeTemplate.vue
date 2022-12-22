<script setup>
import { defineProps } from 'vue';
const Props=defineProps({
    Time:{
        type:String,
        default:'00'
    },
    Rotation:{
        type:Number,
        default:0
    }
})
</script>
<template>
    <div class=" circle">
        <div class="time" :style="{'--rotated':Rotation}">
            <b>
                {{ Time }}
            </b>
            
        </div>
    </div>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@1,600&display=swap');
*{
    --width: 10.5rem;
    --size: 2rem;
    @media only screen and (max-width: 900px){
        --width: 7.5rem;
        --size: 1.4rem;
    }
    @media only screen and (max-width: 600px){
        --width: 6.5rem;
        --size: 1.2rem;
    }
    @media only screen and (max-width: 400px){
        --width: 4.5rem;
    }
    @media only screen and (max-width: 300px){
        --width: 3rem;
        --size: .8rem;
    }
}
.circle{
    font-family: 'Crimson Text', serif;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .time{
        
        width: var(--width);
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        border: 3px solid #a8dadc;
        // background-color: #0d1b2a;
        border-radius: 50%;
        overflow: hidden;
        
        &::after{
            content: "";
            width:calc(var(--width) - 1rem);
            aspect-ratio: 1/1;
            // border: 3px solid #a8dadc;
            background-color: #0d1b2a;
            // background: transparent;
            border-radius: 50%;
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            
        }
        &::before{
            content: "";
            height: calc(var(--width) - .5rem);
            width: 1rem;
            // aspect-ratio: 1/1;
            // border: 3px solid #a8dadc;
            border-radius: 50%;
            background: linear-gradient(to top, #0d1b2a 50%, #e0e1dd 100%);
            position:absolute;
            top: 0%;
            transform-origin: center;
            // box-shadow: 0 0 10px #e0e1dd;
            transform: rotate(calc(var(--rotated) * 1deg));
            
        }
        b{
            font-size: var(--size);
            z-index: 100;
            
        }
        
    }
}
</style>