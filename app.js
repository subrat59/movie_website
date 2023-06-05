const righticons = document.querySelectorAll(".righticon");
const lefticons = document.querySelectorAll(".lefticon");
const movies = document.querySelectorAll(".movie");
const search = document.querySelector("#search");
const searchbar = document.querySelector(".searchbar");
var movieanddescs=document.querySelectorAll(".movieanddesc");
const moviedescs=document.querySelectorAll(".moviedesc");
const newmovies = document.querySelectorAll(".newmovies");
const shift=[];
for(let i=0;i<newmovies.length;i++){
  shift[i]=0;
}; 
righticons.forEach((righticon, j) => {
  righticon.addEventListener("click", () => {
     movieanddescs = newmovies[j].querySelectorAll(".movieanddesc");
    let movieanddescWidth = movieanddescs[0].offsetWidth; 
    console.log(j);
    if (shift[j] <= -(movieanddescWidth * (movieanddescs.length - 1))) {
      shift[j] = 0;
    } else {
      shift[j] -= movieanddescWidth;
    }

    movieanddescs.forEach(movieanddesc => {
      movieanddesc.style.transform = `translateX(${shift[j]}px)`;
    });
  });
});


lefticons.forEach((lefticon, j) => {
  lefticon.addEventListener("click", () => {
    let movieanddescWidth = movieanddescs[0].offsetWidth; 
    if (shift[j] < 0) {
      shift[j] += movieanddescWidth;
      const movieanddescs = newmovies[j].querySelectorAll(".movieanddesc");
      movieanddescs.forEach(movieanddesc => {
        movieanddesc.style.transform = `translateX(${shift[j]}px)`;
      });
    }
  });
});
movieanddescs.forEach((movieanddesc,i) => {
  movieanddesc.addEventListener("mousemove", () => {
      movies[i].style.transform = "scale(1.1)"
      movies[i].style.filter="blur(5px)"
      moviedescs[i].style.visibility="visible"
    });
    movieanddesc.addEventListener("mouseout", () => {
        movies[i].style.transform = "scale(1)"
        movies[i].style.filter="blur(0px)"
        moviedescs[i].style.visibility="hidden"
        });
      });
  search.addEventListener("click",()=>{
    if(searchbar.style.visibility=="hidden")
    searchbar.style.visibility="visible"
    else searchbar.style.visibility="hidden"
  });