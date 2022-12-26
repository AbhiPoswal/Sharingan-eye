// function playSound(audioName,loop){
//     let audio= new Audio(audioName);
//     muted="true";
//     audio.loop =loop;
//     audio.play();
// }
// playSound("Uchiha.mp3",true);

gsap.to("#big_circle",{
    backgroundColor:"red",
    duration:1,
    delay:1
})

gsap.from("#first_big_red_circle",{
    opacity:0,
    duration:1,
    delay:3
})

gsap.from("#first_big_black_circle",{
    opacity:0,
    duration:1,
    delay:3
})

gsap.from("#middle_black_circle",{
    opacity:0,
    duration:2,
    delay:6.5,
    scale:3,
    ease:"linear"
})

gsap.from("#short_black_circle_1",{
    opacity:0,
    duration:1,
    delay:4,
    ease:"linear"
})

gsap.from("#short_black_circle_2",{
    opacity:0,
    duration:1,
    delay:4.5,
    ease:"linear"
})

gsap.from("#short_black_circle_3",{
    opacity:0,
    duration:1,
    delay:5,
    ease:"linear"
})

gsap.from("#short_red_circle_1",{
    opacity:0,
    duration:1,
    delay:2,
    ease:"linear"
})

gsap.from("#short_red_circle_2",{
    opacity:0,
    duration:1,
    delay:2,
    ease:"linear"
})

gsap.from("#short_red_circle_3",{
    opacity:0,
    duration:1,
    delay:1,
    ease:"linear"
})

gsap.to(".short_black_circles",{
    rotate:"720",
    duration:1.5,
    delay:7
})

gsap.from("h1",{
    opacity:0,
    delay:8,
    duration:2,
    ease:"linear"
})

gsap.from("h2",{
    opacity:0,
    delay:12,
    duration:2,
    scale:2,
    ease:"linear"
})

gsap.to("#middle_black_circle",{
    duration:2,
    delay:11,
    scale:4,
    backgroundColor:"orange",
    ease:"linear"
})

gsap.to(".short_black_circles",{
    duration:1.5,
    delay:10,
    opacity:0,
})

gsap.to("#first_big_black_circle",{
    scale:1.4,
    duration:2,
    delay:12
})