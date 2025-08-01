


particlesJS("particles-js", {
 "particles": {
    "number": {
      "value": 200,               // Decrease number of particles
      "density": {
        "enable": true,
        "value_area": 1200       // Increase area so particles are more spread out
      }
    },
    "color": {
      "value": "#ffd700"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.9,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.3,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.4,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffd700",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "repulse": {
        "distance": 250,
        "duration": 0.5
      }
    }
  },
  "retina_detect": true
});
