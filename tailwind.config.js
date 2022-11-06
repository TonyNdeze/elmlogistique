/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend:{
      colors: {
        'Clr-Primary-Blue': 'rgb(50, 115, 201)',
        'Clr-Primary-Red': 'rgb(139, 72, 72)',
        'Clr-Primary-gray': 'rgb(101, 90, 90)',
        'Clr-Neutral-Light': 'rgb(255, 255, 255)',
        'Clr-Neutral-Dark': 'rgb(0, 0, 0)',
        'Clr-Cream': 'rgb(240, 227, 177)',
        'Clr-White-Smoke': 'rgb(248, 248, 248)',
        'Clr-Focus-Blue': 'rgb(94, 146, 201)',
        'Clr-Accent-Blue': 'rgba(31, 46, 51)',
        'Clr-PageBGOpac': 'rgba(250, 250, 250, 0.9)',
        'Clr-ContentBGOpac': 'rgba(250, 250, 250, 0.5)',
        'Clr-ContentBGAccent-Blue': 'rgba(31, 46, 51, 0.7)',
        'Clr-ContentBGOpac-Cream': 'rgb(255, 248, 220, 0.3)',
    },
    backgroundImage:{
      'hero-main-pattern': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),url(/assets/images/Web-Large-Banner-IMG1.png)",
      'card-service-rt': "linear-gradient(rgba(0, 0, 0, 0), rgba(10, 10, 10, 0.7)),url(/assets/images/IMG_1064.JPG)",
      'card-service-hw': "linear-gradient(rgba(0, 0, 0, 0), rgba(10, 10, 10, 0.7)),url(/assets/images/IMG_1076.JPG)",
      'card-service-cc': "linear-gradient(rgba(0, 0, 0, 0), rgba(10, 10, 10, 0.7)),url(/assets/images/IMG_1092.JPG)",
      'counter-section': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),url(/assets/images/IMG_1069.JPG)",
      'whyUs-Img' : "url(/assets/images/IMG_1069.JPG)",
    }
    }
  },
  plugins: [],
}
